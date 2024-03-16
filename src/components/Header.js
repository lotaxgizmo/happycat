import React from 'react'
import happyblackbuy from '../assets/happyblackbuy.svg'
import welcomecat from '../assets/bggif.gif'
import Buy from '../assets/Buy.svg'
import Tokenomics from '../assets/Tokenomics.svg'
import About from '../assets/About.svg'
import Home from '../assets/Home.svg'

function Header() {
    return (
        <div className=' items-center justify-center pt-3 hidden lg:flex z-20 fixed w-full'>
            <div className="header bg-[#56D6E5] w-11/12 h-16 rounded-full flex flex-row items-center justify-between px-10 z-20">

                <a href="#"> <img src={welcomecat} className='w-14' alt="" /></a>

                <div className="header border-2 border-black w-7/12 h-14 rounded-full flex flex-row items-center justify-between px-10">
                    <a href="#"><img src={Home} alt="" /></a>
                    <a href="#"><img src={About} alt="" /></a>
                    <a href="#"><img src={Tokenomics} alt="" /></a>
                    <a href="#"><img src={Buy} alt="" /></a>
                </div>
                <a href="#"><img src={happyblackbuy} className='' alt="" /></a>


            </div>
        </div>
    )
}

export default Header