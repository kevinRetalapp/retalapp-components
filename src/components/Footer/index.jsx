import React from 'react'
import { Link } from 'react-router-dom'
import { SvgLogoVer } from '../icons'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer_wrapper">
                    <div class="box">
                        <Link to="/" className="footer_logo">
                            <SvgLogoVer />
                            <p id="footer_rights">Retalapp © 2021 all rights reserved</p>
                        </Link>
                        
                    </div>
                    <div class="box">
                        <h2>About</h2>
                        <p>About the company</p>
                        <p>Contact us</p>
                    </div>
                    <div class="box">
                        <h2>Terms</h2>
                        <p>Terms and conditions</p>
                        <p>Privacy policies</p>
                    </div>

                    <div class="box">
                        <h2>Agency</h2>
                        <p>Services</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
