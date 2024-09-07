import React from 'react'
import { bannerData } from '../../data/bannerData'

function BannerContent() {
  return (
    <div className='banner-content'>
        <h1 className='banner-title'>{bannerData.name}</h1>
        <p className="banner-designation">{bannerData.designation}</p>
        <a className="resume-button" href="#">{bannerData.ctaText}</a>
    </div>
  )
}

export default BannerContent