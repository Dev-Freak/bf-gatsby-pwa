import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { SecondaryButton, SecondaryButtonProps } from "../../components/Buttons"

import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort"

export default {
  title: "Buttons/Secondary",
  componenet: SecondaryButton,
} as Meta

const Template: Story<SecondaryButtonProps> = args => (
  <SecondaryButton {...args}>
    <ArrowLeftShort />
  </SecondaryButton>
)

export const Default = Template.bind({})
Default.args = {
  label: "Back",
}
