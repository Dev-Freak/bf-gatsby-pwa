import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Label, { LabelProps } from "../../components/Shared/Label"

export default {
  title: "Shared/Label",
  component: Label,
} as Meta

const Template: Story<LabelProps> = args => <Label {...args}>First name</Label>

export const Default = Template.bind({})
Default.args = {}

export const Required = Template.bind({})
Required.args = {
  isRequired: true,
}
