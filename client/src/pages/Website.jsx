import React, { useEffect } from 'react'

// ** Components
import Hero from '../components/Hero/Hero'
import Companies from '../components/Companies/Companies'
import Residencies from '../components/Residencies/Residencies'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import GetStarted from '../components/GetStarted/GetStarted'
// ** Toast
import { toast } from 'react-toastify'

const Website = () => {

    useEffect(() => {
        return (
            <div>
                {
                    toast('برای مشاهده موقعیت هر آگهی لطفا از VPN استفاده کنید', { position: 'top-center' })
                }
            </div>
        )
    }, []);


    return (
        <div className='App'>
            <div>
                <div className='white-gradient' />
                <Hero />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
        </div>
    )
}

export default Website