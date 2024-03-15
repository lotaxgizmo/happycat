import React from 'react'
import howtobuyhappy from '../assets/howtobuyhappy.svg'
import happysteps from '../assets/happysteps.svg'
import happystepsmobile from '../assets/happystepsmobile.svg'
import linebgyellow from '../assets/linebgyellow.svg'
import happyyellowbuy from '../assets/happyyellowbuy.svg'

function Howto() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={howtobuyhappy} className='my-10' alt="" />
            <div className='bg-[#FFC700] w-11/12 rounded-2xl flex flex-col items-center p-10 relative overflow-clip mb-20'>
                <img src={happysteps} className='z-10 hidden lg:flex' alt="" />
                <img src={happystepsmobile} className='z-10 flex lg:hidden' alt="" />
                <img src={happyyellowbuy} className='z-10 hidden lg:flex mt-10' alt="" />
                <img src={linebgyellow} className='absolute  lg:flex hidden max-w-none w-[2000px] mt-[-100px] z-0' alt="" />

            </div>
        </div>
    )
}

export default Howto