import * as React from "react"

export type NodeProps = {
  isActive?: true | false
  isSelected?: true | false
  onClick: CallableFunction
}

const Node: React.FC<NodeProps> = ({
  isActive = false,
  isSelected = false,
  onClick,
}) => {
  const style = isActive || isSelected ? "bg-idle" : "bg-sliderIdle"

  return (
    <span
      style={
        isSelected
          ? { height: "12px", width: "12px" }
          : { height: "6px", width: "6px" }
      }
      className={`flex rounded-lg cursor-pointer ${style}`}
      onClick={() => onClick()}
    ></span>
  )
}

export default Node
