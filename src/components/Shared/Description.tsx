import * as React from "react"
import PropTypes from "prop-types"

export interface DescriptionProps {
  children: string
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className="text-base">{children}</p>
}

Description.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Description
