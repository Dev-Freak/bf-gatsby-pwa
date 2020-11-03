import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import CheckBoxWithDescription, {
  CheckBoxWithDescriptionProps,
} from "../../components/Shared/CheckBoxWithDescription"

export default {
  title: "Shared/CheckBoxWithDescription",
  component: CheckBoxWithDescription,
  argTypes: { onClick: { action: "clicked" } },
} as Meta

const Template: Story<CheckBoxWithDescriptionProps> = args => (
  <CheckBoxWithDescription {...args}>
    Do you authorise BorgFinancial to use your information?
  </CheckBoxWithDescription>
)

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  disabled: false,
}
