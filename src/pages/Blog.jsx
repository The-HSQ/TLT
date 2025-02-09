import React, { useEffect } from 'react'
import BlogPodcast from '../components/BlogPodcast'

const Blog = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className=' mb-10 ' >
        <BlogPodcast />
      </div>
    </>
  )
}

export default Blog
