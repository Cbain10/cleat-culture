import { Link } from 'react-router-dom';
import { GenericButton } from '../../components/buttons/generic-button/GenericButton';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import TerminalIcon from '@mui/icons-material/Terminal';
import './Home.css';

const Home = () => {
    return (
        <div className="buttons-container">
            <Link to={`/soccer`}>
                <GenericButton label='Soccer'>
                    <SportsSoccerIcon fontSize='large' />
                </GenericButton>
            </Link>
            <Link to={`/`}>
                <GenericButton label='Terminal'>
                    <TerminalIcon fontSize='large' />
                </GenericButton>
            </Link>
            <Link to={`/games`}>
                <GenericButton label='Games'>
                    <VideogameAssetIcon fontSize='large' />
                </GenericButton>
            </Link>
        </div>
    )
}

export default Home;