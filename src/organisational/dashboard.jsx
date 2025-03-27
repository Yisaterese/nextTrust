import SideNav from "../components/SideNav.jsx";

function Dashboard() {
    return (
        <div className="dashboard-container" style={{ display: 'flex' }}>
            <SideNav />
            <div className="main-content" style={{ flex: 1, padding: '20px' }}>
                {/* Your dashboard content goes here */}
            </div>
        </div>
    );
}

export default Dashboard;