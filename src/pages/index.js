import React from 'react'
import Layout from '../components/layout'
import HomeBanner from '../components/Home/HomeBanner'
import Courses from '../components/Home/LatestCourses'

const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Courses></Courses>
  </Layout>
)

export default IndexPage
