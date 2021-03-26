import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import Title from "../../../../components/Shared/Title"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import { PurchaseLogo, LandLogo, HouseAndLandLogo } from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const CommercialType: React.FC = () => {
  const {
    state: {
      easyFlow: { construction_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <Title>Type of Construction</Title>
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
        <Tile img={HouseAndLandLogo}>House and Land</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default CommercialType
