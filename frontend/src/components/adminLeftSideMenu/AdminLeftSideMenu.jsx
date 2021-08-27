import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLeftSideMenu.scss";
import classnames from "classnames";

const AdminLeftSideMenu = () => {
    const [isActive, setIsActive] = useState({
        isHomeActive: false,
        isDashBoardActive: false,
        isOrdersActive: false,
        isProductsActive: false,
        isCustomersActive: false,
    });
    return (
        <div className="dkAdminLeftSideMenu">
            <div className="logoArea"></div>
            <div className="sidebar-wrapper d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <h4>Blog Management</h4>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", {
                                "text-white": !isActive,
                                active: isActive.isHomeActive,
                            })}
                        >
                            <i className="fas fa-home sidebar-icon mr-3" />
                            <span
                                onClick={() =>
                                    setIsActive((prevState) => {
                                        const copyState = { ...prevState };
                                        copyState.isHomeActive = true;
                                        return copyState;
                                    })
                                }
                            >
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", {
                                "text-white": !isActive,
                                active: isActive.isDashBoardActive,
                            })}
                        >
                            <i className="fas fa-tachometer-alt sidebar-icon mr-3" />
                            <span
                                onClick={() =>
                                    setIsActive((prevState) => {
                                        const copyState = { ...prevState };
                                        copyState.isDashBoardActive = true;
                                        return copyState;
                                    })
                                }
                            >
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", {
                                "text-white": !isActive,
                                active: isActive.isOrdersActive,
                            })}
                        >
                            <i className="far fa-calendar-alt sidebar-icon mr-3" />
                            Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", {
                                "text-white": !isActive,
                                active: isActive.isProductsActive,
                            })}
                        >
                            <i className="fas fa-th-large sidebar-icon mr-3" />
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={classnames("nav-link", {
                                "text-white": !isActive,
                                active: isActive.isCustomersActive,
                            })}
                        >
                            <i className="fas fa-users sidebar-icon mr-3" />
                            Customers
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminLeftSideMenu;
