import React from 'react'
import ReviewSlider from './Review-Slider'

const MainReviews = () => {
    return (
        <section className="review-container container-fluid">
            <h2><span><img src="/accent.png" alt=""/></span> Klanttevredenheid </h2>
            <ReviewSlider/>
            <span className="navBtn">
                <div className=" square"></div>
                <div className="active square"></div>
                <div className=" square"></div>
            </span>
            
            <img src="/pc-bglight.png" alt="" className="bglight"/>
        </section>
    )
}


export default MainReviews