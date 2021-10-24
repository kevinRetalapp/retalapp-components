import React from 'react'
import { Link } from 'react-router-dom'
import { SvgGit, SvgLogo } from '../icons'


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar_link">
                <SvgLogo  />
            </Link>

            <div className="navbar_menu">
                <Link className="navbar_link" to="/home">
                    Home
                </Link>

                <Link className="navbar_link" to="/docs">
                    Docs
                </Link>

                <Link className="navbar_link" to="/themes">
                    Themes
                </Link>

                <Link className="navbar_link" to="/agency">
                    Agency
                </Link>

                <Link className="navbar_link" to="#">
                    <SvgGit />
                </Link>


            </div>

        </nav>
    )
}

export default Navbar
