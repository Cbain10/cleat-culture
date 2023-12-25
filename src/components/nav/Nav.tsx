import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';
import './Nav.css';
import { GenericButton } from '../buttons/generic-button/GenericButton';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { FC } from 'react';

type NavProps = {
    onClick?: () => void;
}

export const Nav: FC<NavProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className='nav-container'>
            <Link to={'/'} >
                <GenericButton width={50} height={50} >
                    <HomeRoundedIcon fontSize='large'/>
                </GenericButton>
            </Link>
            <Breadcrumbs />
        </div>
    )
}