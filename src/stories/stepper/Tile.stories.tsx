import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import Tile, { TileProps } from "../../components/Tile"
import StateProvider from "../../store/AppStore"

const Logo = require("../../images/icons/Icon1.svg")

export default {
  title: "Stepper/Tile",
  component: Tile,
} as Meta

const Template: Story<TileProps> = args => (
  <StateProvider>
    <Tile {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
Default.args = {
  img: Logo,
  children: "Commercial",
}
