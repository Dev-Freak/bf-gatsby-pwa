import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import {
  EstablishedLogo,
  OffThePlanLogo,
  ConstructionLogo,
  SMSFLogo,
  ReverseMortgageLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const ProjectType: React.FC = () => {
  const {
    state: {
      easyFlow: { applicant_type, project_type },
    },
    boundSelectMutateAndNext,
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
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
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
