import React from 'react'
import { SvgCheck, SvgCircles, SvgMobile, SvgPencil } from '../icons'



const FeaturesSection = () => {
    return (
        <div className="container">

            <h1 className="features_titles">Build quickly</h1>
            <div className="features_wrapper">
                <div className="features_column">
                    <SvgPencil />
                    <span>Customizable</span>
                </div>

                <div className="features_column">
                        <SvgMobile />
                        <span>Mobile first</span>
                </div >

                <div className="features_column">
                    <SvgCheck />
                    <span>Profesional</span>

                </div>

                <div className="features_column">
                    <SvgCircles />
                    <span>Variety</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection
