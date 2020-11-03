import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Lable, { LableProps } from "../../components/Shared/Inputs/Lable"

export default {
  title: "Shared/Label",
  component: Lable,
} as Meta

const Template: Story<LableProps> = args => <Lable {...args}>First name</Lable>

export const Default = Template.bind({})
Default.args = {}

export const Required = Template.bind({})
Required.args = {
  isRequired: true,
}
