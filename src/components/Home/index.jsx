import React from 'react'
import Marquee from './Marquee'
import HeroSection from './HeroSection'
import Stats from './Stats'
import BlogPodcast from './BlogPodcast'
import Usage from './Usage'
import FAQ from './FAQ'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Marquee />
            <Stats />
            <BlogPodcast />
            <Usage />
            <FAQ />
        </>
    )
}

export default Home
