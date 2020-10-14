import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Input from "../../components/Shared/Inputs/Input"

export default {
  title: "Shared/Input",
  component: Input,
} as Meta

const Template: Story = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "Enter full name",
}
