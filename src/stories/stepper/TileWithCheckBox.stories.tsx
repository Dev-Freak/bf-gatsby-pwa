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

const Template: Story<TileWithCheckBoxProps> = args => (
  <TileWithCheckBox {...args}>Commercial</TileWithCheckBox>
)

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  keyName: "path",
}
