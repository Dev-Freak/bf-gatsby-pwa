import * as React from "react"

import TileWithCheckBox from "../TileWithCheckBox"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  PayslipLogo,
  PensionCentrelinkLogo,
  SelfEmployedLogo,
} from "../../utils/icons"

const ApplicantIncomeType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Income type">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="income_type">
        <TileWithCheckBox img={PayslipLogo}>
          PAYG Employed (Payslip)
        </TileWithCheckBox>

        <TileWithCheckBox img={PensionCentrelinkLogo}>
          Pension Centrelink
        </TileWithCheckBox>

        <TileWithCheckBox img={SelfEmployedLogo}>Self Employed</TileWithCheckBox>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ApplicantIncomeType
