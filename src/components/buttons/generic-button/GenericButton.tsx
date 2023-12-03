import { FC, ReactElement } from "react";
import './GenericButton.css';

type GenericButtonProps = {
    onClick?: () => void;
    children?: ReactElement;
}

export const GenericButton: FC<GenericButtonProps> = ({ onClick, children }) => {

    return (
        <div className="generic-button" onClick={onClick}>
            {children}
        </div>
    )
}