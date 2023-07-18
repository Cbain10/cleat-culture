import React from 'react';
import './BackButton.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({ buttonText }) => {
    return (
        <div className='back-button'>
            <ArrowBackIcon className='arrow-icon'/>
            <span className="display-text">{buttonText}</span>
        </div>
    )
}

export default BackButton;