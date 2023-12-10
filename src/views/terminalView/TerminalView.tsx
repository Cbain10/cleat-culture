import { useEffect, useMemo, useState } from "react";
import './TerminalView.css';
import { availableCommands, bannerArt, fileStructure } from "./data";

const USER = 'visitor@CBain';
const USER_POSTFIX = ' ~ % ';

export const TerminalView = () => {

    const [displayText, setDisplayText] = useState<any[]>([]);
    const [command, setCommand] = useState<string>('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [path, setPath] = useState('');
    const [currentFile, setCurrentFile] = useState(fileStructure.home);

    useEffect(() => {
        const arr: any[] = [];
        const helpText = <div style={{ paddingLeft: '30px' }}>enter <span style={{ color: 'rgb(250, 192, 110)'}}>help</span> to see supported commands</div>
        arr.push(getBanner(), helpText);
        setDisplayText(arr);
    }, []);

    const userInfo = useMemo(() => {
        return USER.concat(path).concat(USER_POSTFIX);
    }, [path]);

    const getBanner = () => {
        return <pre className="ascii">{bannerArt}</pre>
    }

    const previousCommandText = () => {
        return (
            <>
                {userInfo}
                <span className='previous-command'>{command}</span>
            </>
        )
    }

    const handleBannerCommand = () => {
        const arr: any[] = [previousCommandText(), getBanner()];
        setDisplayText(displayText.concat(arr));
    }

    const handleCdCommand = () => {
        const dir: string = command.slice(3, command.length);
        if (currentFile.children && dir in currentFile.children) {
            const file = currentFile.children[dir];
            const newPath = path.concat(`/${dir}`)
            setPath(newPath);
            setCurrentFile(file);
            setDisplayText([...displayText, previousCommandText()]);
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
                    const newText = previousCommandText();
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
            const addFolderMessage = <div>please enter a folder name after <span className="highlight-text">cd</span></div>;
            const noFolderMessage = <div><span className="highlight-text">{dir}</span>: folder does not exist</div>;
            const message = dir ? noFolderMessage : addFolderMessage;
            const newText = [ previousCommandText(), message];
            setDisplayText(displayText.concat(newText));
        }
    }

    const handleClearCommand = () => {
        setDisplayText([]);
    }

    const handleGoCommand = () => {
        const navPath = path === '' ? 'home' : path;
        const navigateMessage = <div>navigating to <span className="highlight-text">{navPath}</span>...</div>
        const newText = [previousCommandText(), navigateMessage];
        setDisplayText(displayText.concat(newText));
        setTimeout(() => {
            const baseURL = window.location.origin;
            location.href = `${baseURL}${path}`;
        }, 500);
    }

    const handleHelpCommand = () => {
        const output = availableCommands.map((command, index) => {
            return (
                <div className='help-container' key={command.command + index}>
                    <div className="help-command-text">{command.command}</div>
                    <div className="help-description-text">{command.description}</div>
                </div>
            )
        });
        const tempArr = [previousCommandText(), output];
        setDisplayText(prev => prev.concat(tempArr));
    }

    const handleLsCommand = () => {
        if (currentFile.children) {
            let tempArr: any[] = Object.keys(currentFile.children).map(child => <div style={{ paddingLeft: '30px' }}>{child}</div>);
            tempArr.unshift(previousCommandText());
            setDisplayText(displayText.concat(tempArr));
        } else {
            const newText = [previousCommandText(), 'not a folder'];
            setDisplayText(displayText.concat(newText));
        }
    }

    const handlePwdCommand = () => {
        const newText = [previousCommandText(), `printing working directory...`];
        setDisplayText(displayText.concat(newText));
        setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
        }, 1000)
    }

    const handleCommandNotFound = () => {
        const message = <div className=""><span className="highlight-text">{command}</span>: command not found</div>
        const newText = [previousCommandText(), message];
        setDisplayText(displayText.concat(newText));
    }

    const handleResetCommand = () => {
        commandHistory.unshift(command);
        setCommandHistory([...commandHistory]);
        setCommand('');
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

    const handleKeyUp = () => {
        if (offset < commandHistory.length) {
            const newOffset = offset + 1;
            setOffset(newOffset);
            setCommand(commandHistory[newOffset - 1]);
        }
    }

    const handleKeyDown = () => {
        if (offset === 0) {
            // do nothing
        }
        else if (offset === 1) {
            setCommand('');
            setOffset(0);
        }
        else if (offset > 1) {
            const newOffset = offset - 1;
            setOffset(newOffset);
            setCommand(commandHistory[newOffset - 1]);
        }
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEnterCommand();
                        else if (e.key === 'ArrowUp') handleKeyUp();
                        else if (e.key === 'ArrowDown') handleKeyDown();
                    }}
                    onBlur={e => e.target.focus()}
                />
            </div>
        </div>
    )
}

/*
    to implement
        ***follow prompt down when fills whole page
        display text like printing line by line?
        add more commands
            whoami / bio
            joke
*/