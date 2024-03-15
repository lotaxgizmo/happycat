import React from 'react'
import cathero from '../assets/cathero.svg'
import happydown from '../assets/happydown.svg'
import happyup from '../assets/happyup.svg'
import happybgcircle from '../assets/happybgcircle.svg'
import happybuy from '../assets/happybuy.svg'
import happytelegram from '../assets/happytelegram.svg'
import happymemes from '../assets/happymemes.svg'
import happytwitter from '../assets/happytwitter.svg'

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center relative w-full  pt-20/ pb-72'>

            <div className="z-10 hero flex items-center flex-col">
                <img className='w-[600px] mb-[-130px]' src={happyup} alt="" />
                <img className='w-[721px]' src={cathero} alt="" />
                <img className='w-[600px] mt-[-130px] mb-[-270px]' src={happydown} alt="" />
            </div>
            <img className='z-[0] w-[1000px] absolute animate-spind' src={happybgcircle} alt="" />


            <div className="z-10 buttons w-full">
                <div className='flex flex-row my-10 justify-between mx-9'>
                    <img src={happybuy} alt="" />
                    <img src={happymemes} alt="" />
                </div>
                <div className='flex flex-row my-10 justify-between mx-9'>
                    <img src={happytelegram} alt="" />
                    <img src={happytwitter} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero