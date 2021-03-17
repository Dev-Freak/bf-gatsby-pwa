import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import ApplicantsIncomeTabs from "../../views/easyflow/steps/residential/applicantsIncome/ApplicantsIncomeTabs"

import StoreProvider from "../../store"

export default {
  title: "Shared/ApplicantsIncomeTabs",
  component: ApplicantsIncomeTabs,
} as Meta

const Template: Story = args => {
  return (
    <StoreProvider>
      <ApplicantsIncomeTabs {...args} />
    </StoreProvider>
  )
}

export const Default = Template.bind({})
