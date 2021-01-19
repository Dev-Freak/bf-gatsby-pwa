import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"

import Tile from "../../../../../components/Tile"
import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"
import Tooltip from "../../../../../components/Tooltip"

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
    <StepContainer back>
      <StepHeader>
        <TitleWithTooltip title="Reason for Refinancing?">
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
        <Tile
          img={ConsolidateLogo}
          tooltip="Example: Credit Cards, Personal Loans, Car loans into 1 loan"
        >
          Consolidate Debt
        </Tile>
        <Tile
          img={EquityReleaseLogo}
          tooltip="Money released from the equity within your home"
        >
          Equity Release
        </Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default RefinanceReasons
