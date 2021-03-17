import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StoreProvider from "../../store"
import FinishEasyFlow from "../../components/FinishEasyFlow"

export default {
  title: "EasyFlow Steps/FinishEasyFlow",
  component: FinishEasyFlow,
} as Meta

const Template: Story = args => (
  <StoreProvider>
    <FinishEasyFlow {...args} />
  </StoreProvider>
)

export const Default = Template.bind({})
