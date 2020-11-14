import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  AssetsFinancialLogo,
  CommercialLogo,
  ResidentialLogo,
  OtherLogo,
} from "../../utils/icons"

const Welcome: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Welcome">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="path">
        <Tile img={AssetsFinancialLogo}>Asset financial</Tile>

        <Tile img={ResidentialLogo}>Residential</Tile>

        <Tile img={CommercialLogo}>Commercial</Tile>

        <Tile img={OtherLogo}>Other financial enquiries</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default Welcome
