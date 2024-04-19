import React from "react";
import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";


const MenuLink = ({ to, children }) => {
    const location = useLocation();

    return (
        <Link
            className={`
                ${styles.link}
                ${location.pathname === to ? styles.linkDestacado : null}
            `}
            to={to}
        >
            {children}
        </Link>
    );
};

export default MenuLink;
