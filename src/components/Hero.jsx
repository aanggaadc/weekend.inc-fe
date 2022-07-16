import React from 'react'
import Icon2 from '../assets/icon2.png'
import './Hero.css'

export default function Hero() {
    return (
        <div id='hero'>
            <div className='path'>
                <svg width="752" height="183" viewBox="0 0 752 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H751.557C751.557 0 691.258 10.7299 654.273 65.3526C617.288 119.975 498.467 281.457 150.557 96.4601C32.1527 33.5 0 0 0 0Z" fill="#0B24FB" />
                </svg>
            </div>

            <div className='path2'>
                <svg width="1366" height="722" viewBox="0 0 1366 722" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1145.81 110.528C1047.73 75.4761 947.52 91.3205 892.15 182.829C836.78 274.337 862.508 447.944 664.5 471.222C466.492 494.5 441.591 542 399.457 622.798C299.188 815.081 0 667 0 667V0H1366V120.096C1366 120.096 1253.19 148.904 1145.81 110.528Z" fill="black" />
                </svg>
            </div>

            <div className='content'>
                <h1>WEEKEND FROM HOME</h1>
                <p>Stay active with a little workout.</p>
            </div>

            <div className='oval'>
                <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="66" cy="66" r="66" fill="#0B24FB" />
                </svg>
            </div>

            <img src={Icon2} alt="icon2" />
            <button type='submit'>Let's Go</button>
        </div>
    )
}