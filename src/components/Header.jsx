import React from 'react'
import reactLogo from '../assets/react.svg'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__logo_and_name">
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>Fakecommerce</h1>
            </div>
            
        </div>
    )
}

export default Header