import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { PrimaryButton, PrimaryButtonProps } from "../../components/Buttons"

import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

export default {
  title: "Buttons/Primary",
  component: PrimaryButton,
} as Meta

const Template: Story<PrimaryButtonProps> = args => (
  <PrimaryButton {...args}>
    <ArrowRightShort />
  </PrimaryButton>
)

export const Default = Template.bind({})
Default.args = {
  label: "Next",
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Next",
  isDisabled: true,
}
