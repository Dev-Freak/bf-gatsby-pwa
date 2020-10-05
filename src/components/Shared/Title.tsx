import * as React from "react"
import PropTypes from "prop-types"

export interface TitleProps {
  children: string
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="font-bold text-2xl md:text-3xl">{children}</h2>
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
