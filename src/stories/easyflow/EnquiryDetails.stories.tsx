import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StoreProvider from "../../store"
import EnquiryDetails from "../../views/easyflow/steps/applicationSummary/EnquiryDetails"

export default {
  title: "EasyFlow Steps/EnquiryDetails",
  component: EnquiryDetails,
} as Meta

const Template: Story = args => (
  <StoreProvider>
    <EnquiryDetails {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
