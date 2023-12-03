import { FC, ReactElement } from "react";
import './GenericButton.css';

type GenericButtonProps = {
    onClick?: () => void;
    width?: number;
    height?: number;
    children?: ReactElement;
}

export const GenericButton: FC<GenericButtonProps> = ({ onClick, width = 100, height = 80, children }) => {

    return (
        <div
            className="generic-button"
            onClick={onClick}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {children}
        </div>
    )
}