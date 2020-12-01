import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import ApplicantsIncomeTabs from "../../views/easyflow/steps/residential/applicantsIncome/ApplicantsIncomeTabs"

import StateProvider from "../../store/AppStore"

export default {
  title: "Shared/ApplicantsIncomeTabs",
  component: ApplicantsIncomeTabs,
} as Meta

const Template: Story = args => {
  return (
    <StateProvider>
      <ApplicantsIncomeTabs {...args} />
    </StateProvider>
  )
}

export const Default = Template.bind({})
