// import React from 'react'
import frame from '../assets/abtus.png'
// import balls from '../assets/images.png'
const about = () => {
  return (
    <>
        <div id='abtus' className='about-base'>
            <div className='grey-box'></div>
            <div className='aboutus'>
                <h2 className='aboutushead'>ABOUT US</h2>
                <p className='aboutusp'>Sed Lorem ipsum dolor sit amet. ut perspiciatis unde omnis iste natus error sit voluptatem </p>
                {/* <img id='ball' src={balls} alt="" /> */}
                <img src={frame} alt="" />
            </div>
        </div>
    </>
  )
}

export default about