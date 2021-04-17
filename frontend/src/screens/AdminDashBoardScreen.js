import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AdminDashBoardScreen = () => {
    const routes = [
        {
            path: "/admin/",
            exact: true,
            main: () => <h2>Dashboard</h2>,
        },
        {
            path: "/admin/blog-post-list",
            main: () => <h2>Blog Post List</h2>,
        },
        {
            path: "/admin/fitness-post-list",
            main: () => <h2>Fitness Post List</h2>,
        },
        {
            path: "/admin/user-list",
            main: () => <h2>User List</h2>,
        },
        {
            path: "/admin/settings",
            main: () => <h2>Admin Settings</h2>,
        },
    ];

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/blog-post-list"
                            >
                                Blog Post List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/fitness-post-list"
                            >
                                Fitness Post List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/user-list">
                                User List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/settings">
                                Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Logout
                            </Link>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default AdminDashBoardScreen;
