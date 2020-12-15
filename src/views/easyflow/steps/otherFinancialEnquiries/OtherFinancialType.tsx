import * as React from "react"

import TileWithCheckBox from "../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithNextAndBackButtonContainer from "../../../../components/DynamicStepper/StepWithNextAndBackButtonContainer"

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
      easyFlow: { other_financial_type },
    },
    boundToggleTile,
  } = useStore()

  return (
    <StepWithNextAndBackButtonContainer
      next={{
        isDisabled: !other_financial_type || other_financial_type?.length === 0,
      }}
    >
      <StepHeader>
        <TitleWithTooltip title="Type of Enquiry">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        isMultiple
        stepKeyName="other_financial_type"
        stepValue={other_financial_type}
        onTileClick={(data: DataType) => boundToggleTile(data)}
      >
        <TileWithCheckBox img={PurchaseLogo}>Financial Planning</TileWithCheckBox>

        <TileWithCheckBox img={Refinance_2Logo}>Accounting</TileWithCheckBox>

        <TileWithCheckBox img={DevelopmentLogo}>Conveyancing</TileWithCheckBox>

        <TileWithCheckBox img={SMSFLogo}>Insurances</TileWithCheckBox>
      </TilesContainer>
    </StepWithNextAndBackButtonContainer>
  )
}

export default OtherFinancialType
