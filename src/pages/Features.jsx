import React, { useEffect } from 'react'
import KnowledgeBase from '../components/KnowledgeBase';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=' mb-10 ' >
        <KnowledgeBase />
      </div>
    </>
  )
}

export default Features
