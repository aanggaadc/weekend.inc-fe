import React, { useEffect, useState } from 'react'
import './Content.css'
import Axios from 'axios'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Icon2 from '../assets/icon2.png'

export default function Content() {
    const [dataTestimonial, setDataTestimonial] = useState([])
    const [dataTips, setDataTips] = useState([])

    const getTestimonial = () => {
        Axios.get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
            .then((response) => {
                setDataTestimonial(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    const getTips = () => {
        Axios.get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
            .then((response) => {
                setDataTips(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getTestimonial()
        getTips()
    }, [])

    return (
        <>
            <section id="contents">
                <div className='testi-wrapper'>
                    {dataTestimonial.map((item, index) => {
                        return (
                            <div key={index} className='testi-card'>
                                <h4>{item.by}</h4>
                                <p>{item.testimony}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='content'>
                    <h1>POV</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                    <h1>Resource</h1>
                    <p>These cases are perfectly simple and easy to distinguish. In a free hour,
                        when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>

                    <h1>Help & Tips</h1>
                    <div className='tipscard-container'>
                        {dataTips.map((item, index) => {
                            return <div key={index} className='tips-card'>
                                <img src={item.image} alt="tips" />
                                <div className='card-content'>
                                    <p>{item.title}</p>
                                    <BsFillArrowRightCircleFill size={35} color="#ffffff" />
                                </div>
                            </div>
                        })}
                    </div>
                    <h1>You’re all set.</h1>
                    <p>The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>

                <div className='path3'>
                    <svg width="159" height="195" viewBox="0 0 266 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.4285 204.37C99.5013 118.948 34.9018 50.4653 109.184 9.47884C183.467 -31.5076 297.847 64.2687 257.68 222.56C217.513 380.851 -92.5468 346.566 27.4285 204.37Z" fill="#FF8787" />
                    </svg>
                </div>

                <div className='bottom-container'>
                    <svg width="252" height="295" viewBox="0 0 252 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M106.829 295C106.829 295 287.082 137.537 245.053 42.5123C203.024 -52.5123 0 42.5123 0 42.5123V295H106.829Z" fill="#FF8787" />
                    </svg>
                    <img src={Icon2} alt="icon2" />
                </div>
            </section>

        </>
    )
}