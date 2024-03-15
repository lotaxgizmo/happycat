import React from 'react'
import cathero from '../assets/cathero.svg'
import happydown from '../assets/happydown.svg'
import happyup from '../assets/happyup.svg'
import happybgcircle from '../assets/happybgcircle.svg'
import happybuy from '../assets/happybuy.svg'
import happytelegram from '../assets/happytelegram.svg'
import happymemes from '../assets/happymemes.svg'
import happytwitter from '../assets/happytwitter.svg'
import catsgif from '../assets/catsgif.svg';

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center relative w-full  pt-20/ pb-[400px] lg:pb-72'>

            <div className="z-10 hero flex items-center flex-col mt-14 lg:mt-0">
                <img className='w-80 lg:w-[600px] mb-[-80px] lg:mb-[-130px]' src={happyup} alt="" />
                <img className='w-96 lg:w-[721px]' src={cathero} alt="" />
                <img className='w-80 lg:w-[600px] mt-[-130px] mb-[-270px]' src={happydown} alt="" />
            </div>
            <img className='z-[0] w-96 lg:w-[1000px] mt-96 lg:mt-20 absolute animate-spind' src={happybgcircle} alt="" />
            <img className='z-[0] absolute mt-72 lg:mt-40 w-[900px] ' src={catsgif} alt="" />


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