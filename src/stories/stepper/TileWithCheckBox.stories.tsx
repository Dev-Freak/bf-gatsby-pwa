import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import TileWithCheckBox, {
  TileWithCheckBoxProps,
} from "../../components/TileWithCheckBox"
import StateProvider from "../../store/AppStore"

const Logo = require("../../images/icons/Icon1.svg")

export default {
  title: "Stepper/TileWithCheckBox",
  component: TileWithCheckBox,
} as Meta

const Template: Story<TileWithCheckBoxProps> = args => (
  <StateProvider>
    <TileWithCheckBox {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  text: "Commercial",
  stepKeyName: "path",
}

export const Disabled = Template.bind({})
Disabled.args = {
  img: Logo,
  text: "Commercial",
  stepKeyName: "path",
  isDisabled: true,
}
