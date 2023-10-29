import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import AllCategories from '../components/utils/AllCategories'

const categories = () => {
  return (
    <Layout>
      <Seo
        title="Categories | InsightDC"
        description="List of all categories currently on InsightDC"
      />
      <AllCategories />
    </Layout>
  )
}

export default categories
