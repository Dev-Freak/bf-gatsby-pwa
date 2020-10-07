import * as React from "react"

import MainItem from "./MainItem"
import MainNode from "./MainNode"
import MainLabel from "./MainLabel"
import NestedItem from "./NestedItem"
import NestedNode from "./NestedNode"
import NestedLabel from "./NestedLabel"
import BarConnector, { BarConnectorProps } from "./BarConnector"

export type SectionType = {
  title: string
  subNodes: Array<string>
}

export interface ProgressBarSectionProps {
  section: SectionType
  isActive: true | false
  isCompleted: true | false
}

const ProgressBarSection: React.FC<ProgressBarSectionProps> = ({
  section,
  ...nodeBools
}: ProgressBarSectionProps) => {
  const nodesToRender: Array<object> = []

  const createMainComp = (title: string) => {
    return (
      <MainItem>
        <MainNode {...nodeBools}></MainNode>
        <MainLabel>{title}</MainLabel>
      </MainItem>
    )
  }

  const createSubComp = (title: string, key: number) => {
    return (
      <NestedItem key={`main-item-${key}`}>
        <NestedNode {...nodeBools}></NestedNode>
        <NestedLabel>{title}</NestedLabel>
      </NestedItem>
    )
  }

  return (
    <React.Fragment>
      {nodeBools.isCompleted ? (
        createMainComp(section.title)
      ) : (
        <React.Fragment>
          {createMainComp(section.title)}
          <BarConnector />
          {section.subNodes.forEach((node, index) => {
            return (
              <React.Fragment>
                {createSubComp(node, index)}
                <BarConnector />
              </React.Fragment>
            )
          })}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ProgressBarSection
