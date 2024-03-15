import React from 'react'
import happytokenomics from '../assets/happytokenomics.svg'
import happyyellowbuy from '../assets/happyyellowbuy.svg'
import happytotalstuff from '../assets/happytotalstuff.svg'

function Tokenomics() {
    return (
        <div>
            <div className="outer flex flex-row m-10 items-center">
                <div className="left flex flex-col w-6/12 items-end pr-20">
                    <img src={happytokenomics} className='w-[500px] mb-10' alt="" />
                    <img src={happyyellowbuy} alt="" />

                </div>

                <div className="right w-6/12 bg-black/30 rounded-2xl p-20">
                    <img src={happytotalstuff} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Tokenomics