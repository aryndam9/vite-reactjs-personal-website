import React, { useState, useEffect, useRef } from 'react';
import './css/Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('menu-button')) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const navigationItems = [
        { label: 'About', path: '/#about' },
        { label: 'Skills', path: '/#skills' },
        { label: 'Experience', path: '/#experience' },
        { label: 'Projects', path: '/#projects' },
        { label: 'CV', path: '/cv' },
        { label: 'Blogs', path: '/#blogs' },
        { label: 'Contact', path: '/#contact' },
    ];

    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="/">
                    <div className="logo">
                        <div className='logo-bg-div'>
                            <div className="blinkLogo">&gt;_</div>
                            Arindam Ghosh
                        </div>
                    </div>
                </a>
                <button className="menu-button" onClick={toggleMenu}>Menu</button>
            </div>
            <div className='menu' ref={menuRef}>
                <ul className='menu--desktop'>
                    {navigationItems.map((item, index) => (
                        <li key={index}><a href={item.path}>{item.label}</a></li>
                    ))}
                </ul>
                <ul className={`menu--mobile ${showMenu ? 'show' : 'hide'}`}>
                    {navigationItems.map((item, index) => (
                        <li key={index}><a href={item.path}>{item.label}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;