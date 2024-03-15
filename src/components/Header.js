import React from 'react'
import happyblackbuy from '../assets/happyblackbuy.svg'
import welcomecat from '../assets/welcomecat.svg'
import Buy from '../assets/Buy.svg'
import Tokenomics from '../assets/Tokenomics.svg'
import About from '../assets/About.svg'
import Home from '../assets/Home.svg'

function Header() {
    return (
        <div className=' items-center justify-center pt-3 hidden lg:flex'>
            <div className="header bg-[#56D6E5] w-11/12 h-16 rounded-full flex flex-row items-center justify-between px-10">
                <img src={welcomecat} className='w-14' alt="" />
                <div className="header border-2 border-black w-7/12 h-14 rounded-full flex flex-row items-center justify-between px-10">

                </div>
                <img src={happyblackbuy} className='' alt="" />

            </div>
        </div>
    )
}

export default Header