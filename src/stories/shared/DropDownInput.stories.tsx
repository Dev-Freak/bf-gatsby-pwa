import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import DropDownInput from "../../components/Shared/Inputs/DropDownInput"

export default {
  title: "Shared/DropDownInput",
  component: DropDownInput,
} as Meta

const Template: Story = args => (
  <DropDownInput {...args}>
    <option>First selection</option>
    <option>Second selection</option>
    <option>Thirst selection</option>
    <option>Fourth selection</option>
  </DropDownInput>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: "Please select one",
}
