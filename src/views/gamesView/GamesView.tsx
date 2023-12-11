import { Link } from "react-router-dom"
import { GenericButton } from "../../components/buttons/generic-button/GenericButton";
import ExtensionIcon from '@mui/icons-material/Extension';
// import CasinoIcon from '@mui/icons-material/Casino';
// import GamesIcon from '@mui/icons-material/Games';
// import SportsIcon from '@mui/icons-material/Sports';
// import ToysIcon from '@mui/icons-material/Toys';
import './GamesView.css';
import { Nav } from "../../components/nav/Nav";

export const GamesView = () => {
    return (
        <>
            <Nav />
            {/* <div className="outer-container"> */}
                {/* <div style={{ display: 'flex' }}> */}
                <div className="buttons-container">
                    <Link to={`/games/hangman`}>
                        <GenericButton label="Hangman">
                            <ExtensionIcon fontSize='large' />
                        </GenericButton>
                    </Link>
                    {/* <Link to={`/error`}>
                        <GenericButton>
                            <CasinoIcon fontSize='large' />
                        </GenericButton>
                    </Link>
                    <Link to={`/error`}>
                        <GenericButton>
                            <GamesIcon fontSize='large' />
                        </GenericButton>
                    </Link> */}
                </div>
                {/* <div style={{ display: 'flex' }}>
                    <Link to={`/error`}>
                        <GenericButton>
                            <SportsIcon fontSize='large' />
                        </GenericButton>
                    </Link>
                    <Link to={`/error`}>
                        <GenericButton>
                            <ToysIcon fontSize='large' />
                        </GenericButton>
                    </Link>
                </div> */}
            {/* </div> */}
        </>
    )
}