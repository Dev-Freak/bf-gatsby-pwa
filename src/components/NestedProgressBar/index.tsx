import * as React from "react"

import MainItem from "./MainItem"
import MainNode, { MainNodeProps } from "./MainNode"
import MainLabel, { MainLabelProps } from "./MainLabel"
import NestedItem from "./NestedItem"

import ProgressBarSection, { SectionType } from "./ProgressBarSection"

export interface NestedProgressBarProps {
  item: Array<SectionType>
  currentNode: number
}

const NestedProgressBar: React.FC<NestedProgressBarProps> = ({
  item,
  currentNode,
}: NestedProgressBarProps) => {
  let nodesToRender: Array<object> = []

  const mainNodes = item.map(node => node.title)
  const subNodes = item.map(node => {
    const sub = node.subNodes
    return { ...sub }
  })
  const reducedSubNodes = subNodes.reduce(
    (r, n) => (Object.keys(n).map(sub => r.push(n[parseInt(sub)])), r),
    []
  )
  //const subNodesCount = subNodes.reduce((a, b) => )

  const currentSubNode = subNodes

  for (let mainIndex = 0; mainIndex < mainNodes.length; mainIndex++) {
    const main = mainNodes[mainIndex]

    /* const newMainNode: MainItemProps {
    } */
  }

  console.log(mainNodes)
  console.log(subNodes)
  console.log(reducedSubNodes)

  return (
    <div>
      <div>{}</div>
    </div>
  )
}

export default NestedProgressBar
