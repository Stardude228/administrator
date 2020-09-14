import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="navbar-brand">
                <Link className="nav-link" to="/">Administration for ROST</Link>
            </div>
        </div>
    )
}

export default Header; 
