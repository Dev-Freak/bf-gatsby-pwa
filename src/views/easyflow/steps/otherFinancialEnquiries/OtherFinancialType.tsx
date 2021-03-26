import * as React from "react"

import TileWithCheckBox from "../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import Title from "../../../../components/Shared/Title"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import {
  FinancialPlanningLogo,
  AccountingLogo,
  ConveyancingLogo,
  InsuranceLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const OtherFinancialType: React.FC = () => {
  const {
    state: {
      easyFlow: { additional_services },
    },
    boundToggleTile,
  } = useStore()

  return (
    <StepContainer back next>
      <StepHeader>
        <Title>Additional</Title>
        <Description>Do you require any additional services?</Description>
      </StepHeader>

      <TilesContainer
        isMultiple
        stepKeyName="additional_services"
        stepValue={additional_services}
        onTileClick={(data: DataType) => boundToggleTile(data)}
      >
        <TileWithCheckBox img={FinancialPlanningLogo}>
          Financial Planning
        </TileWithCheckBox>
        <TileWithCheckBox img={AccountingLogo}>Accounting</TileWithCheckBox>
        <TileWithCheckBox img={ConveyancingLogo}>Conveyancing</TileWithCheckBox>
        <TileWithCheckBox img={InsuranceLogo}>Insurances</TileWithCheckBox>
      </TilesContainer>
    </StepContainer>
  )
}

export default OtherFinancialType
