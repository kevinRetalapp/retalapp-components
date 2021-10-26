import React from 'react'
import { Link } from 'react-router-dom'
import { SvgGit, SvgLogoHor } from '../icons'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_logo">
                    <SvgLogoHor />
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
            </div>

        </nav>
    )
}

export default Navbar
