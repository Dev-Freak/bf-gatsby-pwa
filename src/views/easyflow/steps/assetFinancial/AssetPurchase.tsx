import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import { ABNLogo, PersonalNameLogo } from "../../../../utils/icons"

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
