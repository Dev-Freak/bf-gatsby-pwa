/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

import StateProvider from "../store/AppStore"
import useScreenSize from "../hooks/useScreenSize"

const Layout = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */
  const { height } = useScreenSize()

  return (
    <>
      <Header />
      <StateProvider>
        <div
          style={{
            maxWidth: 1430,
            minHeight: height * 0.75,
            padding: `0 1.0875rem 1.45rem`,
          }}
          className="flex mt-10 mx-auto h-full items-center justify-center"
        >
          <main className="w-full">{children}</main>
        </div>
      </StateProvider>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
