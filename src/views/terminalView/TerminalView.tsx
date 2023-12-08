import { useMemo, useState } from "react";
import './TerminalView.css';
import { availableCommands, fileStructure } from "./data";

const USER = 'visitor@CBain';
const USER_POSTFIX = ' ~ % ';

export const TerminalView = () => {

    const [displayText, setDisplayText] = useState<string[]>([]);
    const [command, setCommand] = useState<string>('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [path, setPath] = useState('');
    const [currentFile, setCurrentFile] = useState(fileStructure);

    const userInfo = useMemo(() => {
        return USER.concat(path).concat(USER_POSTFIX);
    }, [path]);

    const handleEnterCommand = () => {
        if (command === 'clear') {
            setDisplayText([]);
        } else if (command === 'help') {
            const commandArray: string[] = availableCommands.map((command => `${command.command} - ${command.description}`));
            commandArray.unshift(userInfo.concat(command));
            setDisplayText(prev => prev.concat(commandArray));
        } else if (command === 'ls') {
            let childrenArray = currentFile.children.map(child => child.name);
            childrenArray.unshift(userInfo.concat(command));
            // display the string
            setDisplayText(displayText.concat(childrenArray));
        } else if (command.substring(0,2) === 'cd') {
            const dir = command.slice(3, command.length);
            console.log(dir);
            const file = currentFile.children.find(child => child.name === dir)
            if (file) {
                const newPath = path.concat(`/${dir}`)
                setPath(newPath);
                setCurrentFile(file);
                setDisplayText([...displayText, userInfo.concat(command)]);
            } else {
                // also add command
                const response = `${dir}: folder does not exist...`;
                setDisplayText([...displayText, response])
            }
        } else if (command === 'go') {
            // display message leaving for path
            const navPath = path === ' ' ? '/' : path;
            const newText = [userInfo.concat(command), `navigation to ${navPath}...`];
            setDisplayText(displayText.concat(newText));
            setTimeout(() => {
                location.href = `http://localhost:5173${path}`;
            }, 1000);
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
                />
            </div>
        </div>
    )
}