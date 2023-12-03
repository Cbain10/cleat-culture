import { Link } from 'react-router-dom';
import { GenericButton } from '../../components/buttons/generic-button/GenericButton';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import './Home.css';

const Home = () => {
    return (
        <div className="buttons-container">
            <Link to={`/soccer`}>
                <GenericButton>
                    <SportsSoccerIcon fontSize='large' />
                </GenericButton>
            </Link>
            <Link to={`/games`}>
                <GenericButton>
                    <VideogameAssetIcon fontSize='large' />
                </GenericButton>
            </Link>
        </div>
    )
}

export default Home;