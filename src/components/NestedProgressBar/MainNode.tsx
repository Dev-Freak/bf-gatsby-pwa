import * as React from "react"
import PropTypes from "prop-types"

import { Check } from "@styled-icons/bootstrap"

export interface MainNodeProps {
  isActive?: true | false
  isCompleted?: true | false
}

const MainNode: React.FC<MainNodeProps> = ({
  isActive,
  isCompleted,
}: MainNodeProps) => {
  const outerStyles = isActive
    ? "bg-white"
    : isCompleted
    ? "bg-white"
    : "bg-brandIdleLight"

  const innerStyles = isActive ? "bg-brand" : "bg-brandIdleDark"

  return (
    <span
      className={`flex items-center justify-center rounded-lg w-node h-node ${outerStyles}`}
    >
      {isCompleted ? (
        <Check
          style={{ transform: "scale(1.1)" }}
          className="relative text-brand w-full h-full"
        />
      ) : (
        <span className={`w-2 h-2 rounded-lg ${innerStyles}`}></span>
      )}
    </span>
  )
}

MainNode.propTypes = {
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
}

MainNode.defaultProps = {
  isActive: false,
  isCompleted: false,
}

export default MainNode
