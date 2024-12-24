import React from "react";
import "./Dashboard.css"; // For custom CSS

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Tempolab Dashboard</h1>
            </header>
            <div className="dashboard-body">
                <aside className="dashboard-sidebar">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Analytics</li>
                            <li>Settings</li>
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </nav>
                </aside>
                <main className="dashboard-content">
                    <h2>Welcome to Tempolab Dashboard</h2>
                    <p>This is your dashboard content area.</p>
                    <div className="stats">
                        <div className="stat-card">Stat 1</div>
                        <div className="stat-card">Stat 2</div>
                        <div className="stat-card">Stat 3</div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
