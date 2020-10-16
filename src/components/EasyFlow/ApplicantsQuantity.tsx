import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../Shared/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  OneApplicantLogo,
  TwoApplicantLogo,
  ThreeApplicantLogo,
  FourApplicantLogo,
} from "../../utils/icons"

const ApplicantsQuantity: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="How many applicants?">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the amount of applicants that will be registered in this
          application
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="applicants_qty">
        <Tile img={OneApplicantLogo}>1 Applicant</Tile>

        <Tile img={TwoApplicantLogo}>2 Applicants</Tile>

        <Tile img={ThreeApplicantLogo}>3 Applicants</Tile>

        <Tile img={FourApplicantLogo}>4 Applicants</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ApplicantsQuantity
