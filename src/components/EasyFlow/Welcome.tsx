import * as React from "react"

import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import StepHeader from "../Shared/StepHeader"
import StepContainer from "../Shared/StepContainer"

const AssetsFinancialLogo = require("../../images/icons/Icon39.svg")
const CommercialLogo = require("../../images/icons/Icon1.svg")
const ResidentialLogo = require("../../images/icons/Icon8.svg")
const OtherLogo = require("../../images/icons/Icon5.svg")

export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <StepContainer>
      <StepHeader>
        <TitleWithTooltip title="Welcome">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer>
        <Tile img={AssetsFinancialLogo}>Asset financial</Tile>

        <Tile img={ResidentialLogo}>Residential</Tile>

        <Tile img={OtherLogo}>Other financial enquiries</Tile>

        <Tile img={CommercialLogo}>Commercial</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default Welcome
