import { Link } from "react-router-dom"
import { GenericButton } from "../../components/buttons/generic-button/GenericButton";
import TableChartIcon from '@mui/icons-material/TableChart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Nav } from "../../components/nav/Nav";

export const SoccerView = () => {
    return (
        <>
            <Nav />
            <div className="buttons-container">
                <Link to={`/soccer/archive`}>
                    <GenericButton label="Archive">
                        <TableChartIcon fontSize='large' />
                    </GenericButton>
                </Link>
                <Link to={`/soccer/recommender`}>
                    <GenericButton label="Recommender">
                        <ManageSearchIcon fontSize='large' />
                    </GenericButton>
                </Link>
            </div>
        </>
    )
}

/*

    Soccer
        Cleats - serverless backend
        Personal? (resume, highlights)
        Training content - automated training planner?
            Check availability for actual training sessions
            Positional references - forwards -> David Villa clips
    Service
    Exercise
    Barefoot shoes
    Trivia
        Seinfeld
        HP
        Star Wars

    Games
        DB for stats - leaderboard on some sort of game
        Hangman
        Tic Tac Toe
        Black Jack
    
*/