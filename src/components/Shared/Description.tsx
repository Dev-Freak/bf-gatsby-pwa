import * as React from "react"
import PropTypes from "prop-types"

export type DescriptionProps = {
  children: string
  isBold?: true | false
}

const Description: React.FC<DescriptionProps> = ({ children, isBold = false }) => {
  const style = isBold ? "font-bold text-sm" : "text-base"
  return <p className={style}>{children}</p>
}

Description.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Description
