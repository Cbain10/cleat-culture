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
                <Link to={`/soccer/cleat-table`}>
                    <GenericButton>
                        <TableChartIcon fontSize='large' />
                    </GenericButton>
                </Link>
                <Link to={`/soccer/chooser`}>
                    <GenericButton>
                        <ManageSearchIcon fontSize='large' />
                    </GenericButton>
                </Link>
            </div>
        </>
    )
}