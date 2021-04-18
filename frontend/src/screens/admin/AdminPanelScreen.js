import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import AdminPostEditScreen from "./AdminPostEditScreen";
import AdminPostListScreen from "./AdminPostListScreen";

const AdminPanelScreen = () => {
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
                    <ul className="nav flex-column bg-dark nav-pills">
                        <li className="nav-item mb-3">
                            <NavLink
                                activeClassName="active"
                                className="nav-link text-white"
                                exact
                                to="/admin/"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3">
                            <NavLink
                                activeClassName="active"
                                className="nav-link text-white"
                                to="/admin/blog-post-list"
                            >
                                Blog Post List
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3">
                            <NavLink
                                activeClassName="active"
                                className="nav-link text-white"
                                to="/admin/fitness-post-list"
                            >
                                Fitness Post List
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3">
                            <NavLink
                                activeClassName="active"
                                className="nav-link text-white"
                                to="/admin/user-list"
                            >
                                User List
                            </NavLink>
                        </li>
                        <li className="nav-item mb-3">
                            <NavLink
                                activeClassName="active"
                                className="nav-link text-white"
                                to="/admin/settings"
                            >
                                Settings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName
                                className="nav-link text-white"
                                to="/"
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                    <main>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default AdminPanelScreen;
