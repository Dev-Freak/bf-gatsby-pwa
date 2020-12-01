import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import EnquiryDetails from "../../views/easyflow/ApplicationSummary/EnquiryDetails"

export default {
  title: "EasyFlow Steps/EnquiryDetails",
  component: EnquiryDetails,
} as Meta

const Template: Story = args => (
  <StateProvider>
    <EnquiryDetails {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
