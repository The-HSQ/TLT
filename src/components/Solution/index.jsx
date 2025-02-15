import React from 'react'
import HeroSection from './HeroSection'
import SolutionFAQ from './SolutionFAQ'
import { faqOneData, faqTwoData } from './faqOneData'

const Solution = () => {
  return (
    <>
      <HeroSection />
      <SolutionFAQ data={faqOneData} bgColor={'white'} bdColor={'black'} txtColor={'black'} />
      <SolutionFAQ data={faqTwoData} bgColor={'[#1C1C1C]'} bdColor={'white'} txtColor={'white'} />
    </>
  )
}

export default Solution
