import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Tooltip, { TooltipProps } from "../../components/Tooltip"

const Logo = require("../../images/icons/Icon1.svg")

export default {
  title: "Shared/Tooltip",
  component: Tooltip,
} as Meta

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  text: "Commercial",
}
