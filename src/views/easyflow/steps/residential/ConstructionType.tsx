import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import { PurchaseLogo, LandLogo } from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const CommercialType: React.FC = () => {
  const {
    state: {
      easyFlow: { construction_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Construction">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="construction_type"
        stepValue={construction_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={PurchaseLogo}>Dual Occupancy</Tile>
        <Tile img={PurchaseLogo}>Knock Down Rebuild/House Only</Tile>
        <Tile img={LandLogo}>House and Land</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default CommercialType
