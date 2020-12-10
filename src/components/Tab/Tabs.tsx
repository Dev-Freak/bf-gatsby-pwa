import * as React from "react"
import { Tab, Menu } from "semantic-ui-react"
import "./tabs.css"

import TabHeader from "./TabHeader"
import TabsContainer from "./TabsContainer"

export type TabProps = {
  label: string
  step: object
}

export type TabsProps = {
  steps: Array<TabProps>
  onTabChange: CallableFunction
  defaultActiveIndex?: string | number
}

const Tabs: React.FC<TabsProps> = ({ steps, defaultActiveIndex, onTabChange }) => {
  const getPanes = () => {
    return steps.map((step, index) => ({
      menuItem: (
        <Menu.Item key={index}>
          <TabHeader isActive={defaultActiveIndex === index}>{step.label}</TabHeader>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>{step.step}</Tab.Pane>,
    }))
  }

  return (
    <TabsContainer>
      <Tab
        panes={getPanes()}
        onTabChange={(
          e: React.MouseEvent<HTMLDivElement, MouseEvent>,
          { activeIndex }
        ) => onTabChange(activeIndex)}
        className={"tabs flex-col"}
      />
    </TabsContainer>
  )
}

export default Tabs
