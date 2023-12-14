import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';
import './Nav.css';
import { GenericButton } from '../buttons/generic-button/GenericButton';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';

export const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to={'/home'} >
                <GenericButton width={50} height={50} >
                    <HomeRoundedIcon fontSize='large'/>
                </GenericButton>
            </Link>
            <Breadcrumbs />
        </div>
    )
}