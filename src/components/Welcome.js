import React from 'react'
import whalecum from '../assets/whalecum.svg'
import abouthappycat from '../assets/abouthappycat.svg'
import welcomecat from '../assets/welcomecat.svg'
import linebg from '../assets/linebg.svg'
import happycatbuy from '../assets/happycatbuy.svg'

function Welcome() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="background bg-black/60 flex flex-col items-center w-11/12 rounded-2xl overflow-clip mb-20">

                <img src={whalecum} className=' my-10 z-10' alt="" />

                <div className="relative z-10 background overflow-hidden bg-[#56D6E5] flex flex-col mb-20 items-center w-11/12 rounded-2xl">
                    <img src={linebg} className='linebg max-w-max w-[10000px] absolute z-0' alt="" />
                    <div className="divided flex flex-row p-20  z-10">
                        <div className="first w-6/12 flex items-center  z-10">
                            <img src={welcomecat} alt="" />

                        </div>
                        <div className="second w-6/12 flex flex-col items-end  z-10">
                            <img src={abouthappycat} className=' mb-10' alt="" />
                            <p className='text-3xl text-right mb-10' >Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet Lorem ipsum Dolor amet </p>
                            <img src={happycatbuy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome