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
  SMSFLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const CommercialType: React.FC = () => {
  const {
    state: {
      easyFlow: { commercial_type },
    },
    boundSelectAndNext,
  } = useStore()

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

      <TilesContainer
        stepKeyName="commercial_type"
        stepValue={commercial_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={PurchaseLogo}>Purchase</Tile>
        <Tile img={Refinance_2Logo}>Refinance</Tile>
        <Tile img={DevelopmentLogo}>Development</Tile>
        <Tile img={SMSFLogo}>SMSF</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default CommercialType
