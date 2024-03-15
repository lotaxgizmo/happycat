import React from 'react'
import happytokenomics from '../assets/happytokenomics.svg'
import happyyellowbuy from '../assets/happyyellowbuy.svg'
import happytotalstuff from '../assets/happytotalstuff.svg'

function Tokenomics() {
    return (
        <div>
            <div className="outer flex  lg:flex-row flex-col m-10 items-center">
                <div className="left flex flex-col lg:w-6/12 lg:items-end lg:pr-20 mb-10">
                    <img src={happytokenomics} className='w-[500px] mb-10' alt="" />
                    <img src={happyyellowbuy} alt="" />

                </div>

                <div className="right lg:w-6/12 bg-black/30 rounded-2xl p-3 lg:p-20">
                    <img src={happytotalstuff} className='w-96 lg:w-auto' alt="" />

                </div>
            </div>
        </div>
    )
}

export default Tokenomics