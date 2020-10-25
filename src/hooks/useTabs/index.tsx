import * as React from "react"
import { Tab, Menu } from "semantic-ui-react"

import useStore from "../useStore"

import TabHeader from "../../components/Tab/TabHeader"
import { TabsProps } from "../../components/Tab/Tabs"

const useTabs = ({ steps }: TabsProps) => {
  const {
    state: {
      tabs: { activeTab },
    },
    boundSetTab,
  } = useStore()

  const handleTabChange = (e, { activeIndex }) => {
    boundSetTab(activeIndex)
  }

  const getPanes = () => {
    return steps.map((step, index) => ({
      menuItem: (
        <Menu.Item key={index}>
          <TabHeader isActive={activeTab === index}>{step.label}</TabHeader>
        </Menu.Item>
      ),
      render: () => <Tab.Pane>{step.step}</Tab.Pane>,
    }))
  }

  return { activeTab, panes: getPanes(), handleTabChange }
}

export default useTabs
