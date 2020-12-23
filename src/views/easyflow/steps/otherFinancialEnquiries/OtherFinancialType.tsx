import * as React from "react"

import TileWithCheckBox from "../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import {
  PurchaseLogo,
  Refinance_2Logo,
  DevelopmentLogo,
  SMSFLogo,
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
        <TitleWithTooltip title="Additional">Optional</TitleWithTooltip>
        <Description>Do you require any additional services?</Description>
      </StepHeader>

      <TilesContainer
        isMultiple
        stepKeyName="additional_services"
        stepValue={additional_services}
        onTileClick={(data: DataType) => boundToggleTile(data)}
      >
        <TileWithCheckBox img={PurchaseLogo}>Financial Planning</TileWithCheckBox>
        <TileWithCheckBox img={Refinance_2Logo}>Accounting</TileWithCheckBox>
        <TileWithCheckBox img={DevelopmentLogo}>Conveyancing</TileWithCheckBox>
        <TileWithCheckBox img={SMSFLogo}>Insurances</TileWithCheckBox>
      </TilesContainer>
    </StepContainer>
  )
}

export default OtherFinancialType
