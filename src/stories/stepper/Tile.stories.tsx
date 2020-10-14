import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Tile, { TileProps } from "../../components/Tile"

const Logo = require("../../images/icons/Icon1.svg")

export default {
  title: "Stepper/Tile",
  component: Tile,
} as Meta

const Template: Story<TileProps> = args => <Tile {...args} />

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  children: "Commercial",
}

export const Selected = Template.bind({})
Selected.args = {
  isSelected: true,
  img: Logo,
  children: "Commercial",
}
