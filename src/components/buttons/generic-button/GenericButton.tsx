import { FC, ReactElement } from "react";
import './GenericButton.css';

type GenericButtonProps = {
    onClick?: () => void;
    width?: number;
    height?: number;
    label?: string;
    children?: ReactElement;
}

export const GenericButton: FC<GenericButtonProps> = ({ onClick, width = 100, height = 80, label, children }) => {

    return (
        <div
            className="generic-button"
            onClick={onClick}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {children}
            <div className="btn-label">
                {label}
            </div>
        </div>
    )
}