import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="nav">
            <ul className="nav-links">
                <li>
                    <Link to="/Header" className={location.pathname === "/Header" ? "active" : ""}>INICIO</Link>
                </li>
                <li>
                    <Link to="/Header1" className={location.pathname === "/Header1" ? "active" : ""}>CALCULADORA</Link>
                </li>
                <li>
                    <Link to="/Header2" className={location.pathname === "/Header2" ? "active" : ""}>COLORES</Link>
                </li>
                <li>
                    <Link to="/Header3" className={location.pathname === "/Header3" ? "active" : ""}>REGISTRO</Link>
                </li>
                <li>
                    <Link to="/Header4" className={location.pathname === "/Header4" ? "active" : ""}>LISTAS DE TAREAS</Link>
                </li>
            </ul>
        </nav>
    );
}
