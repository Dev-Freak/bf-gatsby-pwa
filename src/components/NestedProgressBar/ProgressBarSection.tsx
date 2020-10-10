import * as React from "react"

import MainItem from "./MainItem"
import MainNode from "./MainNode"
import MainLabel from "./MainLabel"
import NestedItem from "./NestedItem"
import NestedNode from "./NestedNode"
import NestedLabel from "./NestedLabel"
import BarConnector from "./BarConnector"

export type SectionType = {
  title: string
  subNodes: Array<string>
}

export interface ProgressBarSectionProps {
  section: SectionType
  activeNode?: number
  isActive: true | false
  isCompleted: true | false
}

const ProgressBarSection: React.FC<ProgressBarSectionProps> = ({
  section,
  activeNode,
  ...nodeBools
}: ProgressBarSectionProps) => {
  const { title, subNodes } = section
  const { isActive, isCompleted } = nodeBools

  return (
    <div className="flex items-center justify-center w-full max-w-xs md:max-w-screen md:flex-col">
      {isCompleted ? (
        <React.Fragment>
          <MainItem title={title} {...nodeBools} />
          <BarConnector />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MainItem title={title} {...nodeBools} />
          <BarConnector />
          {isActive &&
            subNodes.map((node, index) => {
              let isSubNodeActive
              if (activeNode != null) isSubNodeActive = activeNode >= index

              return (
                <div
                  key={`frag-${index}`}
                  className="hidden flex-col items-center justify-center md:flex"
                >
                  <NestedItem key={`nested-item-${index}`}>
                    <NestedNode isActive={isSubNodeActive}></NestedNode>
                    <NestedLabel>{node}</NestedLabel>
                  </NestedItem>
                  <BarConnector />
                </div>
              )
            })}
        </React.Fragment>
      )}
    </div>
  )
}

export default ProgressBarSection
