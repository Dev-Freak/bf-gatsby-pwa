import * as React from "react"

type ConnectorProps = {
  isActive?: true | false
}

const Connector: React.FC<ConnectorProps> = ({ isActive = false }) => {
  const style = isActive ? "bg-idle" : "bg-sliderIdle"

  return (
    <span
      style={{ height: "3px", minWidth: "30px" }}
      className={`block ${style}`}
    ></span>
  )
}

export default Connector
