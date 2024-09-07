import React from 'react'
import { headerData } from '../../data/headerData'
import "./Header.scss"

function Header() {
  return (
    <header className='header'>
        <h1 className='header-title'><a href={headerData.headerLink}>{headerData.headerTitle}</a></h1>
        <nav className='header-navbar'>
            <ul className='header-navbar-links'>
                {headerData.headerLinks.map((item, index) => {
                    return <li key={index}><a className='header-navbar-link' href={item.linkUrl}>{item.linkText}</a></li>
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Header