import * as React from "react"
import PropTypes from "prop-types"

export interface BarConnectorProps {
  isCompleted?: true | false
}

const BarConnector: React.FC<BarConnectorProps> = ({ isCompleted }) => {
  const style = isCompleted ? "bg-completedDark" : "bg-idleLight"

  return (
    <div className="flex items-center justify-center flex-grow">
      <span style={{ height: "2px" }} className={`block w-full max-w-xs ${style}`} />
    </div>
  )
}

BarConnector.propTypes = {
  isCompleted: PropTypes.bool,
}

BarConnector.defaultProps = {
  isCompleted: false,
}

export default BarConnector
