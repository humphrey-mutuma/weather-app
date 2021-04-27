import React from 'react'
import Days from './DaysComponent/Days'
import Footer from './FooterComponent/Footer'
import Header from './HeaderComponent/Header'
import Location from './LocationComponent/Location'
import './Weather.css'

const Weather = () => {
    return (
        <section className='Weather'>
            <Header />
            <Location />
            <Days />
            <Footer />
        </section>
    )
}

export default Weather
