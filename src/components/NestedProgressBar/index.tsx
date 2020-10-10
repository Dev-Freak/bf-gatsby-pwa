import * as React from "react"

import ProgressBarSection, {
  ProgressBarSectionProps,
  SectionType,
} from "./ProgressBarSection"

export interface NestedProgressBarProps {
  item: Array<SectionType>
  currentNode: number
}

const NestedProgressBar: React.FC<NestedProgressBarProps> = ({
  item,
  currentNode,
}: NestedProgressBarProps) => {
  const mainNodes: Array<string> = item.map(node => node.title)

  const subNodes: Array<Array<string>> = item.map(node => {
    const sub = node.subNodes
    return [...sub]
  })

  const reducedSubNodes = subNodes.reduce(
    (r, n) => (Object.keys(n).map(sub => r.push(n[parseInt(sub)])), r),
    []
  )

  let nodesAccum = 0
  let nodesToRender: Array<ProgressBarSectionProps> = []
  for (let index = 0; index < mainNodes.length; index++) {
    const prevAccum = nodesAccum
    nodesAccum += subNodes[index].length

    const activeSubNode = currentNode - prevAccum

    const newSectionProps: ProgressBarSectionProps = {
      section: {
        title: mainNodes[index],
        subNodes: subNodes[index],
      } as SectionType,
      isActive: currentNode >= prevAccum && currentNode < nodesAccum,
      isCompleted: currentNode >= nodesAccum,
      activeNode: activeSubNode,
    }

    nodesToRender.push(newSectionProps)
  }

  return (
    <div>
      <div className="flex items-center justify-center md:flex-col">
        {nodesToRender.map(node => (
          <ProgressBarSection {...node} />
        ))}
      </div>
    </div>
  )
}

export default NestedProgressBar
