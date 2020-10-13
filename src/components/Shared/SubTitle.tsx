import * as React from "react"
import PropTypes from "prop-types"

export interface SubTitleProps {
  children: string
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <h2 className="font-bold text-sm">{children}</h2>
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default SubTitle
