import React from 'react'
import './TopBar.css'
import Icon from '../assets/icon.png'

export default function TopBar() {
    return (
        <div id='topbar'>
            <div className='topbar-container'>
                <img src={Icon} alt="icon" />
                <p>Good Morning <br /> <span>Fellas</span></p>
            </div>
        </div>
    )
}