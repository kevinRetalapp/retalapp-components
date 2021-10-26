import React from 'react'
import Divs from '../../assets/Divs.png'

const HeaderSection = () => {
    return (
        <div className="header_container">

            <div className="header_items">
                <h1 className="header_title">More than a css framework</h1>
                <button className="btn">Get Started</button>
                <div className="header_features">
                    <div >
                        <div className="header_circle purple" />
                        <span>Fast</span>

                    </div>
                    <div>
                        <div className="header_circle orange" />
                        <span>Custom</span>
                    </div>

                    <div>
                        <div className="header_circle red" />
                        <span>Responsive</span>
                    </div>

                </div>

            </div>
            <div className="header_image_container">
                <img className="header_image" src={Divs} alt="" />
            </div>
        </div>
    )
}

export default HeaderSection
