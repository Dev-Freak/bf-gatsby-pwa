import * as React from "react"
import PropTypes from "prop-types"

export interface BarNodeProps {
  isActive?: true | false
  isCompleted?: true | false
}

const BarNode: React.FC<BarNodeProps> = ({ isActive, isCompleted }) => {
  const outerStyles = isActive
    ? "bg-activeLight"
    : isCompleted
    ? "bg-completedLight"
    : "bg-idleLight"

  const innerStyles = isActive
    ? "bg-brand"
    : isCompleted
    ? "bg-completedDark"
    : "bg-idleDark"

  return (
    <span
      className={`flex items-center justify-center rounded-lg w-node h-node ${outerStyles}`}
    >
      <span className={`w-2 h-2 rounded-lg ${innerStyles}`}></span>
    </span>
  )
}

BarNode.propTypes = {
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
}

BarNode.defaultProps = {
  isActive: false,
  isCompleted: false,
}

export default BarNode
