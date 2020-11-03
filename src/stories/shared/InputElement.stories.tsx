import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import InputElement, {
  InputElementProps,
} from "../../components/Shared/Inputs/InputElement"

import "../../components/layout.css"

export default {
  title: "Shared/InputElement",
  component: InputElement,
} as Meta

const Template: Story<InputElementProps> = args => <InputElement {...args} />

export const Default = Template.bind({})
Default.args = {
  lable: "Full name",
  required: true,
  options: {
    placeholder: "Enter full name",
  },
}
