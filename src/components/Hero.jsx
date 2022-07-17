import React from 'react'
import Icon2 from '../assets/icon2.png'
import './Hero.css'

export default function Hero() {
    return (
        <>
            <section id='upper-hero'>
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

                <div className='title'>
                    <h1>WEEKEND FROM HOME</h1>
                    <p>Stay active with a little workout.</p>
                </div>

                <div className='oval'>
                    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="66" cy="66" r="66" fill="#0B24FB" />
                    </svg>
                </div>

                <div className='path3'>
                    <svg width="266" height="327" viewBox="0 0 266 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4285 204.37C99.5013 118.948 34.9018 50.4653 109.184 9.47884C183.467 -31.5076 297.847 64.2687 257.68 222.56C217.513 380.851 -92.5468 346.566 27.4285 204.37Z" fill="#FF8787" />
                    </svg>
                </div>

                <div className='content'>
                    <img src={Icon2} alt="icon2" />
                    <button type='submit'>Let's Go</button>
                </div>
            </section>

            <section id="bottom-hero">
                <div className='upper'>
                    <svg width="76" height="158" viewBox="0 0 76 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M76 0C76 0 -17.8759 82.9817 4.20458 133.059C14.4579 156.313 38.3713 163.248 75.9816 154.108C76 146.602 76 0 76 0Z" fill="#FF8787" />
                    </svg>
                    <img src={Icon2} alt="icon2" />
                </div>

                <div className='quote'>
                    <p><span>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
                    <p>-weekend team</p>
                </div>

                <div className='bottom'>
                    <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="Oval" cx="44.5" cy="44.5" r="44.5" fill="#0B24FB" />
                    </svg>
                    <h4>Testimonial</h4>
                </div>

            </section>
        </>

    )
}