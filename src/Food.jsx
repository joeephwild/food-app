import React from 'react'
import './Food.css'

const Food = ({ bgImg, bgImg1, bgImg2, title, h2 }) => {
    return (
        <div style={{ background: `url('${bgImg}') no-repeat center center/cover` }} className='food'>
            <div className="container">
                <div style={{ background: `url('${bgImg1}') no-repeat center center/cover` }} className="left"></div>
                <div style={{ background: `url('${bgImg2}') no-repeat center center/cover` }} className="right"></div>
            </div>

          
        </div>
    )
}

export default Food