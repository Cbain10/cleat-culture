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

    const handleBannerCommand = () => {
        const arr: any[] = [userInfo.concat(command), (<pre className="ascii">{bannerArt}</pre>)];
        setDisplayText(displayText.concat(arr));
    }

    const handleHelpCommand = () => {
        const output = availableCommands.map((command => <div style={{ paddingLeft: '30px' }}>{command.command} - {command.description}</div>));
        const tempArr = [userInfo.concat(command), output];
        setDisplayText(prev => prev.concat(tempArr));
    }

    const handleLsCommand = () => {
        if (currentFile.children) {
            let tempArr: any[] = Object.keys(currentFile.children).map(child => <div style={{ paddingLeft: '30px' }}>{child}</div>);
            tempArr.unshift(userInfo.concat(command));
            setDisplayText(displayText.concat(tempArr));
        } else {
            const newText = [userInfo.concat(command), 'not a folder'];
            setDisplayText(displayText.concat(newText));
        }
    }

    const handleCdCommand = () => {
        const dir: string = command.slice(3, command.length);
        if (currentFile.children && dir in currentFile.children) {
            const file = currentFile.children[dir];
            const newPath = path.concat(`/${dir}`)
            setPath(newPath);
            setCurrentFile(file);
            setDisplayText([...displayText, userInfo.concat(command)]);
        } else if (dir === '../') {
            if (path) {
                const pathArr = path.split('/').slice(1);
                let file = fileStructure.home;
                for (let i = 0; i < pathArr.length - 1; i++) {
                    file = file.children[pathArr[i]];
                }
                const lastPath = pathArr[pathArr.length - 1];
                if (lastPath in file.children) {
                    const newPath = path.replace(`/${lastPath}`, '');
                    const newText = userInfo.concat(command);
                    setDisplayText([...displayText, newText]);
                    setPath(newPath);
                    setCurrentFile(file);
                }
            } else {
                const newText = [USER.concat(USER_POSTFIX).concat(command), 'No parent directory'];
                setDisplayText(displayText.concat(newText));
            }
        } else {
            // should go to home dir???
            const message = dir ? `${dir}: folder does not exist` : 'please enter a folder name after \'cd\'';
            const newText = [ userInfo.concat(command), message];
            setDisplayText(displayText.concat(newText));
        }
    }

    const handleGoCommand = () => {
        const navPath = path === ' ' ? '/' : path;
        const newText = [userInfo.concat(command), `navigating to ${navPath}...`];
        setDisplayText(displayText.concat(newText));
        setTimeout(() => {
            const baseURL = window.location.origin;
            location.href = `${baseURL}${path}`;
        }, 1000);
    }

    const handlePwdCommand = () => {
        const newText = [userInfo.concat(command), `printing working directory...`];
        setDisplayText(displayText.concat(newText));
        setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
        }, 1000)
    }

    const handleCommandNotFound = () => {
        const newText = [ userInfo.concat(command), `${command}: command not found`]
        setDisplayText(displayText.concat(newText));
    }

    const handleResetCommand = () => {
        setCommandHistory([...commandHistory, command]);
        setCommand('');
    }

    const handleClearCommand = () => {
        setDisplayText([]);
    }

    const handleEnterCommand = () => {
        const commandFirstWord = command.split(' ')[0];
        switch (commandFirstWord) {
            case 'banner':
                handleBannerCommand();
                break;
            case 'cd':
                handleCdCommand();
                break;
            case 'clear':
                handleClearCommand();
                break;
            case 'go':
                handleGoCommand();
                break;
            case 'help':
                handleHelpCommand();
                break;
            case 'ls':
                handleLsCommand();
                break;
            case 'pwd':
                handlePwdCommand();
                break;
            default:
                handleCommandNotFound();
                break;
        }
        handleResetCommand();
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
        styling for all responses
        follow prompt down when fills whole page
        display text like printing line by line?
        use arrow keys for previous commands
*/