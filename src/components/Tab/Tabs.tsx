import * as React from "react"
import { Tab } from "semantic-ui-react"

import useTabs from "../../hooks/useTabs"
import TabsContainer from "./TabsContainer"

import "./tabs.css"

export type TabProps = {
  label: string
  step: object
}

export type TabsProps = {
  steps: Array<TabProps>
}

const Tabs: React.FC<TabsProps> = ({ steps }: TabsProps) => {
  const { activeTab, panes, handleTabChange } = useTabs({ steps })

  return (
    <TabsContainer>
      <Tab
        panes={panes}
        onTabChange={handleTabChange}
        activeIndex={activeTab}
        className={"tabs flex-col"}
      />
    </TabsContainer>
  )
}

export default Tabs
