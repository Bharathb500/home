import React from 'react'
import './banner.scss'

function Banner({children, BannerImage}) {

  return (
    <div  className='banner'>{children}</div>
  )
}

export default Banner