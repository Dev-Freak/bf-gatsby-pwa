import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../Shared/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  RefinanceLogo,
  FirstHomeBuyerLogo,
  InvestorLogo,
  RetirementLogo,
} from "../../utils/icons"

const ApplicationType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Application">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="applicant_type">
        <Tile img={RefinanceLogo}>Refinance</Tile>

        <Tile img={FirstHomeBuyerLogo}>First home buyer</Tile>

        <Tile img={InvestorLogo}>Investor</Tile>

        <Tile img={RetirementLogo}>Retirement</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ApplicationType
