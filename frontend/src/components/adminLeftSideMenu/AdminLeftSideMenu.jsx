import React from "react";
import "./AdminLeftSideMenu.scss";
import { Link } from "react-router-dom";

const AdminLeftSideMenu = () => {
    return (
        <nav id="sideBarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collaspe">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/blog-management">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog-management">
                            Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog-management">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog-management">
                            Customers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog-management">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminLeftSideMenu;
