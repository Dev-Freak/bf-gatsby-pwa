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
  let nodesToRender: Array<object> = []

  for (let index = 0; index < length; index++) {
    const isNodeActive = index === currentNode
    const isNodeCompleted = currentNode > index

    const newNode: BarNodeProps = {
      isActive: isNodeActive,
      isCompleted: isNodeCompleted,
    }
    nodesToRender.push(newNode)

    if (index !== length - 1) {
      const newConnector: BarConnectorProps = {
        isCompleted: newNode.isCompleted,
      }
      nodesToRender.push(newConnector)
    }
  }

  return (
    <div className="flex items-center justify-center m-auto h-full py-2 px-0 w-full md:px-0">
      <div className="flex flex-1 items-justify justify-center flex-no-wrap">
        {nodesToRender.map((node, index) => {
          return index % 2 === 0
            ? React.createElement(BarNode, { key: `node-${index}`, ...node })
            : React.createElement(BarConnector, { key: `node-${index}`, ...node })
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
