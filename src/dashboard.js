import {Link} from "react-router-dom";

const Dashboard = () => {
    return ( 
        <>
        <nav className="navbar">
            <h2>Dashboard</h2>
            <h4>John10</h4>
            <button>Logout</button>
        </nav>
        <div className="dashboard">
            <Link to="/addCandidate">
                <h3>Add Candidate Details</h3>
            </Link>
            <Link to="/schedule">
                <h3>Schedule Interview</h3>
            </Link>
            <Link to="/reports">
                <h3>View Results</h3>
            </Link>
        </div>
        </>
    );
}
 
export default Dashboard;