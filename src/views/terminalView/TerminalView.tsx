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
        } else if (command.substring(0,2) === 'cd') {
            const dir = command.slice(3, command.length);
            console.log(dir);
            const file = currentFile.children.find(child => child.name === dir)
            if (file) {
                const newPath = path.concat(`/${dir}`)
                setPath(newPath);
                setCurrentFile(file);
                // const result = USER.concat(newPath);
                setDisplayText([...displayText, USER.concat(command)]);
            } else {
                const response = `${dir}: folder does not exist...`;
                setDisplayText([...displayText, response])
            }
        } else if (command === 'go') {
            // get prefix, add path
            // display message leaving for path
            // timeout
            location.href = `http://localhost:5173${path}`;
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