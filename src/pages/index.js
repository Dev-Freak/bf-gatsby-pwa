import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/Seo"

import AppFlow from "../components/AppFlow"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AppFlow />
    </Layout>
  )
}

export default IndexPage
