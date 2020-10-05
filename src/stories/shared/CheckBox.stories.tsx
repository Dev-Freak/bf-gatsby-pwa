import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import CheckBox, { CheckBoxProps } from "../../components/CheckBox"

export default {
  title: "Shared/CheckBox",
  component: CheckBox,
} as Meta

const Template: Story<CheckBoxProps> = args => <CheckBox {...args} />

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
