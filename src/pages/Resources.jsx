import React, { useEffect } from 'react'
import FAQ from '../components/FAQ';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=' mb-10 ' >
        <FAQ />
      </div>
    </>
  )
}

export default Resources
