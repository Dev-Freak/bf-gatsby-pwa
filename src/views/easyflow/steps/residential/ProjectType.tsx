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

export enum ProjectOptions {
  Established,
  Construction,
  Off_The_Plan,
  SMSF,
  Reverse_Mortgage,
}

const ProjectType: React.FC = () => {
  const {
    state: {
      easyFlow: { application_type, project_type },
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
        {application_type === "First home buyer" ? (
          <>
            <Tile img={EstablishedLogo}>{ProjectOptions[0]}</Tile>
            <Tile img={ConstructionLogo}>{ProjectOptions[1]}</Tile>
            <Tile img={OffThePlanLogo}>{ProjectOptions[2]}</Tile>
          </>
        ) : application_type === "Investor" ? (
          <>
            <Tile img={EstablishedLogo}>{ProjectOptions[0]}</Tile>
            <Tile img={ConstructionLogo}>{ProjectOptions[1]}</Tile>
            <Tile img={OffThePlanLogo}>{ProjectOptions[2]}</Tile>
            <Tile img={SMSFLogo}>{ProjectOptions[3]}</Tile>
          </>
        ) : (
          <>
            <Tile img={ReverseMortgageLogo}>{ProjectOptions[4]}</Tile>
            <Tile img={SMSFLogo}>{ProjectOptions[3]}</Tile>
          </>
        )}
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ProjectType
