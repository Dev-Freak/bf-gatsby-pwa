import * as React from "react"
import PropTypes from "prop-types"

import BarNode, { BarNodeProps } from "./BarNode"
import BarConnector, { BarConnectorProps } from "./BarConnector"

export interface SimpleProgressBarProps {
  length: number
  currentNode: number
}

const SimpleProgressBar: React.FC<SimpleProgressBarProps> = ({
  length,
  currentNode,
}: SimpleProgressBarProps) => {
  let nodesArray: Array<object> = []

  for (let index = 0; index < length; index++) {
    const isNodeActive = index === currentNode
    const isNodeCompleted = currentNode > index

    const newNode: BarNodeProps = {
      isActive: isNodeActive,
      isCompleted: isNodeCompleted,
    }
    nodesArray.push(newNode)

    if (index !== length - 1) {
      const newConnector: BarConnectorProps = {
        isCompleted: newNode.isCompleted,
      }
      nodesArray.push(newConnector)
    }
  }

  return (
    <div className="flex items-center justify-center w-6/12 h-full py-2 px-10">
      <div className="flex flex-1 items-justify flex-no-wrap">
        {nodesArray.map((node, index) => {
          return index % 2 === 0
            ? React.createElement(BarNode, node)
            : React.createElement(BarConnector, node)
        })}
      </div>
    </div>
  )
}

SimpleProgressBar.propTypes = {
  length: PropTypes.number.isRequired,
  currentNode: PropTypes.number.isRequired,
}

export default SimpleProgressBar
