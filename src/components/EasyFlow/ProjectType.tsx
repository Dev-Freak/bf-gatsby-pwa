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

import useStore, { DataType } from "../../hooks/useStore"

const ProjectType: React.FC = () => {
  const {
    state: {
      easyFlow: { applicant_type, project_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Project">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="project_type"
        stepValue={project_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        {applicant_type === "First home buyer" ? (
          <>
            <Tile img={EstablishedLogo}>Established</Tile>

            <Tile img={ConstructionLogo}>Construction</Tile>

            <Tile img={OffThePlanLogo}>Off the plan</Tile>
          </>
        ) : applicant_type === "Investor" ? (
          <>
            <Tile img={EstablishedLogo}>Established</Tile>

            <Tile img={ConstructionLogo}>Construction</Tile>

            <Tile img={SMSFLogo}>SMSF</Tile>
          </>
        ) : (
          <>
            <Tile img={ReverseMortgageLogo}>Reverse Mortgage</Tile>

            <Tile img={SMSFLogo}>SMSF</Tile>
          </>
        )}
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ProjectType
