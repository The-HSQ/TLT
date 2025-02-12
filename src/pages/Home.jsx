import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import KnowledgeBase from '../components/KnowledgeBase'
import Stats from '../components/Stats'
import BlogPodcast from '../components/BlogPodcast'
import Usage from '../components/Usage'
import FAQ from '../components/FAQ'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection />
            {/* <KnowledgeBase /> */}
            <Stats />
            <BlogPodcast />
            <Usage />
            <FAQ />
        </>
    )
}

export default Home
