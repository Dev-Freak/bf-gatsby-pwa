import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import {
  PurchaseLogo,
  Refinance_2Logo,
  DevelopmentLogo,
} from "../../../../utils/icons"

const CommercialType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Commercial">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="commercial_type">
        <Tile img={PurchaseLogo}>Purchase</Tile>

        <Tile img={Refinance_2Logo}>Refinance</Tile>

        <Tile img={DevelopmentLogo}>Development</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default CommercialType
