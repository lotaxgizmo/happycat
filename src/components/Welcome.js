import React from 'react'
import whalecum from '../assets/whalecum.svg'
import abouthappycat from '../assets/abouthappycat.svg'
import welcomecat from '../assets/welcomecat.svg'
import linebg from '../assets/linebg.svg'
import happycatbuy from '../assets/happycatbuy.svg'

function Welcome() {
    return (
        <div className='flex flex-col justify-center items-center mb-10'>
            <div className="background bg-black/60 flex flex-col items-center w-11/12 rounded-2xl overflow-clip mb-20">

                <img src={whalecum} className=' my-10 z-10' alt="" />

                <div className="relative z-10 background overflow-hidden bg-[#56D6E5] flex flex-rowflex-col mb-20 items-center w-11/12 rounded-2xl">
                    <img src={linebg} className='linebg max-w-max w-[10000px] absolute z-0' alt="" />
                    <div className="divided flex flex-col lg:flex-row lg:p-20  z-10">
                        <div className="first lg:w-6/12 flex flex-col items-center justify-center z-10">
                            <img src={welcomecat} className='w-60 lg:w-auto' alt="" />

                        </div>
                        <div className="second lg:w-6/12 flex flex-col items-center lg:items-end  z-10">
                            <img src={abouthappycat} className=' mb-10' alt="" />
                            <p className='lg:text-3xl pl-5 lg:pl-0 lg:text-right mb-10' >Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet </p>
                            <img src={happycatbuy} className='mb-10' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome