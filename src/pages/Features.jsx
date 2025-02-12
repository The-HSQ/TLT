import React, { useEffect } from 'react'
import Stats from '../components/Stats';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=' mb-10 ' >
        <Stats />
      </div>
    </>
  )
}

export default Features
