import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import TileWithCheckBox, {
  TileWithCheckBoxProps,
} from "../../components/TileWithCheckBox"

const Logo = require("../../images/icons/Icon1.svg")

export default {
  title: "Stepper/TileWithCheckBox",
  component: TileWithCheckBox,
} as Meta

const Template: Story<TileWithCheckBoxProps> = args => <TileWithCheckBox {...args} />

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  text: "Commercial",
}

export const Checked = Template.bind({})
Checked.args = {
  img: Logo,
  text: "Commercial",
  isSelected: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  img: Logo,
  text: "Commercial",
  isDisabled: true,
}
