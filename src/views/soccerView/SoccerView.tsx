import { Link } from "react-router-dom"
import { GenericButton } from "../../components/buttons/generic-button/GenericButton";
import TableChartIcon from '@mui/icons-material/TableChart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const SoccerView = () => {
    return (
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
    )
}