import * as React from "react"
import PropTypes from "prop-types"

export interface NestedNodeProps {
  isActive?: true | false
}

const NestedNode: React.FC<NestedNodeProps> = ({ isActive }: NestedNodeProps) => {
  const innerStyles = isActive ? "bg-white" : "bg-brandIdleLight"

  return <span className={`inline-block innerNode rounded-lg ${innerStyles}`} />
}

NestedNode.propTypes = {
  isActive: PropTypes.bool,
}

NestedNode.defaultProps = {
  isActive: false,
}

export default NestedNode
