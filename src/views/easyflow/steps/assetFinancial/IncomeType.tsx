import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"
import { IncomeOptions } from "../../stepsOptions"

import {
  PayslipLogo,
  SoleTraderLogo,
  CompanyLogo,
  TrustEntityLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const IncomeType: React.FC = () => {
  const {
    state: {
      easyFlow: { asset_purchase, asset_income_type },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <TitleWithTooltip title="Type of income">Norem ipsum...</TitleWithTooltip>
        <Description>Please select your streams of income</Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="asset_income_type"
        stepValue={asset_income_type}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        {asset_purchase === "Personal Name" ? (
          <>
            <Tile img={PayslipLogo}>{IncomeOptions[0]}</Tile>
            <Tile img={SoleTraderLogo}>{IncomeOptions[1]}</Tile>
          </>
        ) : (
          <>
            <Tile img={SoleTraderLogo}>{IncomeOptions[1]}</Tile>
            <Tile img={CompanyLogo}>{IncomeOptions[2]}</Tile>
            <Tile img={TrustEntityLogo}>{IncomeOptions[3]}</Tile>
          </>
        )}
      </TilesContainer>
    </StepContainer>
  )
}

export default IncomeType
