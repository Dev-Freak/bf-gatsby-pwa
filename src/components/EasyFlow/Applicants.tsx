import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../Shared/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  OneApplicant,
  TwoApplicant,
  ThreeApplicant,
  FourApplicant,
} from "../../utils/icons"

const Applicants: React.FC = () => {
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

      <TilesContainer stepKeyName="path">
        <Tile img={OneApplicant}>1 Applicant</Tile>

        <Tile img={TwoApplicant}>2 Applicants</Tile>

        <Tile img={ThreeApplicant}>3 Applicants</Tile>

        <Tile img={FourApplicant}>4 Applicants</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default Applicants
