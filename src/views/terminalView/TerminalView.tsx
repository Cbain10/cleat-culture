import { useEffect, useMemo, useState } from "react";
import './TerminalView.css';
import { availableCommands, bannerArt, fileStructure } from "./data";

const USER = 'visitor@CBain';
const USER_POSTFIX = ' ~ % ';

export const TerminalView = () => {

    const [displayText, setDisplayText] = useState<any[]>([]);
    const [command, setCommand] = useState<string>('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [path, setPath] = useState('');
    const [currentFile, setCurrentFile] = useState(fileStructure.home);

    useEffect(() => {
        const arr: any[] = [];
        arr.push(<pre className="ascii">{bannerArt}</pre>);
        setDisplayText(arr);
    }, []);

    const userInfo = useMemo(() => {
        return USER.concat(path).concat(USER_POSTFIX);
    }, [path]);

    const handleEnterCommand = () => {
        if (command === 'banner') {
            const arr: any[] = [USER.concat(path).concat(USER_POSTFIX).concat(command), (<pre className="ascii">{bannerArt}</pre>)];
            setDisplayText(displayText.concat(arr));
        } else if (command === 'clear') {
            setDisplayText([]);
        } else if (command === 'help') {
            const commandArray: string[] = availableCommands.map((command => `${command.command} - ${command.description}`));
            commandArray.unshift(userInfo.concat(command));
            setDisplayText(prev => prev.concat(commandArray));
        } else if (command === 'ls') {
            let arr = Object.keys(currentFile.children);
            arr.unshift(userInfo.concat(command));
            setDisplayText(displayText.concat(arr));
        } else if (command.substring(0,2) === 'cd') {
            const dir: string = command.slice(3, command.length);
            if (dir in currentFile.children) {
                const file = currentFile.children[dir];
                const newPath = path.concat(`/${dir}`)
                setPath(newPath);
                setCurrentFile(file);
                setDisplayText([...displayText, userInfo.concat(command)]);
            } else {
                // cd ../ go back up a folder 
                // also add command
                const newText = [ USER.concat(path).concat(USER_POSTFIX).concat(command), `${dir}: folder does not exist`]
                setDisplayText(displayText.concat(newText));
            }
        } else if (command === 'go') {
            // display message leaving for path
            const navPath = path === ' ' ? '/' : path;
            const newText = [userInfo.concat(command), `navigation to ${navPath}...`];
            setDisplayText(displayText.concat(newText));
            setTimeout(() => {
                location.href = `http://localhost:5173${path}`;
            }, 1000);
        } else if (command === 'pwd') {
            const newText = [userInfo.concat(command), `printing working directory...`];
            setDisplayText(displayText.concat(newText));
            setTimeout(() => {
                window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
            }, 1000)
        } else {
            const newText = [ userInfo.concat(command), `${command}: command not found`]
            setDisplayText(displayText.concat(newText));
        }
        setCommandHistory([...commandHistory, command]);
        setCommand('');
    }

    return (
        <div className="terminal-container">
            {displayText.map((line, index) => {
                return <div key={index}>{line}</div>
            })}
            <div>
                {userInfo}
                <input
                    className="text-input"
                    type="text"
                    autoFocus
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleEnterCommand(); }}
                    onBlur={e => e.target.focus()}
                />
            </div>
        </div>
    )
}

/*
    to implement
        base URL for location.href (go)
        cd ../
        styling for all responses
*/