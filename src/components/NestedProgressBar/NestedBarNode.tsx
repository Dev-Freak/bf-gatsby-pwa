import * as React from "react"
import PropTypes from "prop-types"

export interface NestedBarNodeProps {
  isActive?: true | false
}

const NestedBarNode: React.FC<NestedBarNodeProps> = ({
  isActive,
}: NestedBarNodeProps) => {
  const innerStyles = isActive ? "bg-white" : "bg-brandIdleLight"

  return <span className={`innerNode rounded-lg ${innerStyles}`}></span>
}

NestedBarNode.propTypes = {
  isActive: PropTypes.bool,
}

NestedBarNode.defaultProps = {
  isActive: false,
}

export default NestedBarNode
