import './Logo.css'
import logo from '../../assets/images/logo.png'
import React from 'react'


export default props =>
    <aside className='logo'>
        <a href="/" className="logo_container">
            <img src={logo} alt="Logo" />
        </a>
    </aside>