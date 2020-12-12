import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Value, { ValueProps } from "../../components/Shared/Value"

export default {
  title: "Shared/Value",
  component: Value,
} as Meta

const Template: Story<ValueProps> = args => <Value {...args}>Residential</Value>

export const Default = Template.bind({})
Default.args = {}
