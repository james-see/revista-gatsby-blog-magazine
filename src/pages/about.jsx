import React from 'react'
import Layout from '../components/Layout'
import AboutUs from '../components/About/AboutUs'
import Vision from '../components/About/Vision'
import Network from '../components/About/Network'
import Seo from '../components/SEO'

const about = () => {
  return (
    <Layout>
      <Seo
        title="About Us | InsightDC"
        description="For people passionate about the truth."
      />

      <AboutUs />
      <Vision />
      <Network />
    </Layout>
  )
}

export default about
