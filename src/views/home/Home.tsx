import { Link } from 'react-router-dom';
import { GenericButton } from '../../components/buttons/generic-button/GenericButton';
import TableChartIcon from '@mui/icons-material/TableChart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import './Home.css';

const Home = () => {
    return (
        <div className="buttons-container">
            <Link to={`/cleat-table`}>
                <GenericButton>
                    <TableChartIcon fontSize='large' />
                </GenericButton>
            </Link>
            <Link to={`/chooser`}>
                <GenericButton>
                    <ManageSearchIcon fontSize='large' />
                </GenericButton>
            </Link>
        </div>
    )
}

export default Home;