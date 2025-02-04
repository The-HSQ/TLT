import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import KnowledgeBase from '../components/KnowledgeBase'
import Stats from '../components/Stats'
import BlogPodcast from '../components/BlogPodcast'
import Usage from '../components/Usage'
import FAQ from '../components/FAQ'
import BeforeFooter from '../components/BeforeFooter'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
            <KnowledgeBase />
            <Stats />
            <BlogPodcast />
            <Usage />
            <FAQ />
            <BeforeFooter />
            <Footer />
        </>
    )
}

export default Home
