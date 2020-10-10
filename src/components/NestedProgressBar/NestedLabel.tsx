import * as React from "react"
import PropTypes from "prop-types"

export interface NestedLabelProps {
  children: string
}

const NestedLabel: React.FC<NestedLabelProps> = ({ children }) => {
  return (
    <span className="absolute hidden items-center justify-center px-8 py-2 md:flex">
      <p className="m-0 text-white text-xxs font-normal">{children}</p>
    </span>
  )
}

NestedLabel.propTypes = {
  children: PropTypes.string.isRequired,
}

export default NestedLabel
