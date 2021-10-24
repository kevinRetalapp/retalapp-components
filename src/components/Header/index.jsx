import React from 'react'
import Divs from '../../assets/Divs.png'

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_items">
                <h1 className="header_title">More than a css framework</h1>
                <button className="btn">Get Started</button>
               
            </div>
            <img src={Divs} alt="" width="536px" />
        </div>
    )
}

export default Header
