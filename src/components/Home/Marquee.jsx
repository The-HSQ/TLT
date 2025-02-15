import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    const upperMarquee = [
        '/marquee/Marquee_1.svg',
        '/marquee/Marquee_2.svg',
        '/marquee/Marquee_3.svg',
        '/marquee/Marquee_4.svg',
        '/marquee/Marquee_5.svg',
        '/marquee/Marquee_6.svg',
        '/marquee/Marquee_7.svg',
        '/marquee/Marquee_8.svg',
    ]


    return (
        <div className=' pt-20 pb-10 px-[1rem] md:px-[2rem] lg:px-[2.5rem] '>
            <div className=' custom-container mx-auto overflow-x-hidden ' >
                <h2 className=' text-center text-[#262627] text-xl font-medium ' >World-class marketing teams trust TLT</h2>
                <div className=' flex MyGradient'>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className='flex flex-shrink-0 gap-3 md:gap-10'
                    >
                        {upperMarquee.map((image, index) => {
                            return <img key={index} className=' h-auto w-auto ' src={image} />
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className='flex flex-shrink-0 gap-3 md:gap-10'
                    >
                        {upperMarquee.map((image, index) => {
                            return <img key={index} className=' h-auto w-auto ' src={image} />
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Marquee
