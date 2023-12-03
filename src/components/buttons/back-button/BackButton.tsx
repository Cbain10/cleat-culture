import { FC } from 'react';
import './BackButton.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export type BackButtonProps = {
    buttonText: string
}

const BackButton: FC<BackButtonProps> = ({ buttonText }) => {
    return (
        <div className='back-button'>
            <ArrowBackIcon className='arrow-icon'/>
            <span className="display-text">{buttonText}</span>
        </div>
    )
}

export default BackButton;