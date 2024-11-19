import React from 'react'
import NavbarBlog from '../../components/Blog/NavbarBlog'
import MainBlog from '../../components/Blog/MainBlog'
import Footer from '../../components/MainPage/Footer'

function BlogPage() {

  document.title="Blogs"

  return (
    <>
      <NavbarBlog />
      <MainBlog />
      <Footer />
    </>
  )
}

export default BlogPage
