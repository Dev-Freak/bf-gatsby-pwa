import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import {
  EstablishedLogo,
  OffThePlanLogo,
  ConstructionLogo,
  SMSFLogo,
  ReverseMortgageLogo,
} from "../../utils/icons"

import useStore from "../../hooks/useStore"

const ProjectType: React.FC = () => {
  const {
    state: {
      easyFlow: { applicant_type },
    },
  } = useStore()

  const tiles =
    applicant_type === "First home buyer" ? (
      <React.Fragment>
        <Tile img={EstablishedLogo}>Established</Tile>

        <Tile img={ConstructionLogo}>Construction</Tile>

        <Tile img={OffThePlanLogo}>Off the plan</Tile>
      </React.Fragment>
    ) : applicant_type === "Investor" ? (
      <React.Fragment>
        <Tile img={EstablishedLogo}>Established</Tile>

        <Tile img={ConstructionLogo}>Construction</Tile>

        <Tile img={SMSFLogo}>SMSF</Tile>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Tile img={ReverseMortgageLogo}>Reverse Mortgage</Tile>

        <Tile img={SMSFLogo}>SMSF</Tile>
      </React.Fragment>
    )

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Project">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="project_type">{tiles}</TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ProjectType
