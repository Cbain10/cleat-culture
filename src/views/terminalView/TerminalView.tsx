import { useState } from "react";
import './TerminalView.css';
import { availableCommands, fileStructure } from "./data";

const USER = 'visitor@CBain ~ % ';

export const TerminalView = () => {

    const [displayText, setDisplayText] = useState<string[]>([]);
    const [command, setCommand] = useState<string>('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [path, setPath] = useState('');
    const [currentFile, setCurrentFile] = useState(fileStructure);
    const files = fileStructure;

    const handleEnterCommand = () => {
        if (command === 'clear') {
            setDisplayText([]);
        } else if (command === 'help') {
            const commandArray: string[] = availableCommands.map((command => `${command.command} - ${command.description}`));
            commandArray.unshift(USER.concat(command));
            setDisplayText(prev => prev.concat(commandArray));
        } else if (command === 'ls') {
            let childrenArray = currentFile.children.map(child => child.name);
            childrenArray.unshift(USER.concat(command));
            // display the string
            setDisplayText(displayText.concat(childrenArray));
        } else {
            setDisplayText(prev => [...prev, USER.concat(command)]);
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
                {USER}
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