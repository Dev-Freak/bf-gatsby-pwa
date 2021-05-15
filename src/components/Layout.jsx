import React from "react"
import PropTypes from "prop-types"
import StoreProvider from "../store"
import useScreenSize from "../hooks/useScreenSize"

import "./layout.css"

const Layout = ({ children }) => {
  const { height } = useScreenSize()

  return (
    <StoreProvider>
      <div
        style={{
          maxWidth: 1430,
          minHeight: (height ?? 850) * 0.75,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className="flex mx-auto mt-10 h-full items-center justify-center"
      >
        <main className="w-full">{children}</main>
      </div>
    </StoreProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
