    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import '../styles/Header.css';
    import logo from '../assets/Logo.png';  

    const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="header">
        <img src={logo} alt="Giant Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
            ☰
        </button>
        <nav>
            <ul className={`menu ${menuActive ? 'active' : ''}`}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/bicicletas">Bicicletas</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    };

    export default Header;