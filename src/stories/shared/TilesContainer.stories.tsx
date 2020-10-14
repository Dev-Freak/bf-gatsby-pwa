import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import TilesContainer, {
  TilesContainerProps,
} from "../../components/Shared/TilesContainer"

import Tile from "../../components/Tile"

const AssetsFinancialLogo = require("../../images/icons/Icon39.svg")
const CommercialLogo = require("../../images/icons/Icon1.svg")
const ResidentialLogo = require("../../images/icons/Icon8.svg")
const OtherLogo = require("../../images/icons/Icon5.svg")

export default {
  title: "Shared/TilesContainer",
  component: TilesContainer,
} as Meta

const Template: Story<TilesContainerProps> = args => (
  <TilesContainer {...args}>
    <Tile img={AssetsFinancialLogo}>Asset financial</Tile>

    <Tile img={ResidentialLogo}>Residential</Tile>

    <Tile img={OtherLogo}>Other financial enquiries</Tile>

    <Tile img={CommercialLogo}>Commercial</Tile>
  </TilesContainer>
)

export const Default = Template.bind({})
Default.args = {}
