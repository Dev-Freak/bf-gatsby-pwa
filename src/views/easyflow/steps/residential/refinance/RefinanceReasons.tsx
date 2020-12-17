import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"

import Tile from "../../../../../components/Tile"
import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../../components/DynamicStepper/StepWithBackButtonContainer"

import {
  BetterRateLogo,
  ConsolidateLogo,
  EquityReleaseLogo,
} from "../../../../../utils/icons"

const RefinanceReasons: React.FC = () => {
  const {
    state: {
      easyFlow: { refinance_reason },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="What is the reason for refinancing?">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the options that best fits your intentions
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="refinance_reason"
        stepValue={refinance_reason}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={BetterRateLogo}>Better Rate</Tile>
        <Tile img={ConsolidateLogo}>Consolidate Debt</Tile>
        <Tile img={EquityReleaseLogo}>Equity Release</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default RefinanceReasons
