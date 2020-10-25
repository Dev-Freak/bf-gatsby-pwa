import * as React from "react"
import { Tab } from "semantic-ui-react"

import useTabs from "../../hooks/useTabs"
import TabsContainer from "./TabsContainer"

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
        menu={{ secondary: true }}
        panes={panes}
        onTabChange={handleTabChange}
        activeIndex={activeTab}
        className={"tab-header flex-col"}
      />
    </TabsContainer>
  )
}

export default Tabs
