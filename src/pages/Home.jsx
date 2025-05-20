import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Services from '../components/Services'
import ProjectsSection from '../components/ProjectsSection'
import BlogSection from '../components/BlogSection'
import SupportSection from '../components/SupportSection'
import CTASection from '../components/CTASection'

function Home() {
  return (
    <Layout >
        <Hero/>
        <Features/>
        <About/>
        <Services/>
        <ProjectsSection/>
        <BlogSection/>
        <CTASection/>
        <SupportSection/>
    </Layout>    
  )
}

export default Home