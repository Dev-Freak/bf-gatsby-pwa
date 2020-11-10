import * as React from "react"

import Tile from "../../Tile"
import TilesContainer from "../../Shared/TilesContainer"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import Description from "../../Shared/Description"
import StepHeader from "../../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../DynamicStepper/StepWithBackButtonContainer"

import { ABNLogo, PersonalNameLogo } from "../../../utils/icons"

const AssetPurchase: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Asset Purchase">Norem ipsum...</TitleWithTooltip>
        <Description>How are you wanting to purchase the asset?</Description>
      </StepHeader>

      <TilesContainer stepKeyName="asset_purchase">
        <Tile img={ABNLogo}>ABN/ACN Business</Tile>

        <Tile img={PersonalNameLogo}>Personal Name</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default AssetPurchase
