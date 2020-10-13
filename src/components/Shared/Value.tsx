import * as React from "react"
import PropTypes from "prop-types"

export interface ValueProps {
  children: string
}

const Value: React.FC<ValueProps> = ({ children }) => {
  return <h2 className="font-normal text-sm">{children}</h2>
}

Value.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Value
