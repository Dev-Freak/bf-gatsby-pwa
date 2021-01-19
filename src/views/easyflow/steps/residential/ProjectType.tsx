import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import Title from "../../../../components/Shared/Title"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"
import { ProjectOptions, ApplicationOptions } from "../../stepsOptions"

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
      easyFlow: { application_type, project_type },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <Title>Type of Project</Title>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="project_type"
        stepValue={project_type}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        {application_type === ApplicationOptions[1] ? (
          <>
            <Tile img={EstablishedLogo}>{ProjectOptions[0]}</Tile>
            <Tile img={ConstructionLogo}>{ProjectOptions[1]}</Tile>
            <Tile img={OffThePlanLogo}>{ProjectOptions[2]}</Tile>
          </>
        ) : application_type === ApplicationOptions[2] ? (
          <>
            <Tile img={EstablishedLogo}>{ProjectOptions[0]}</Tile>
            <Tile img={ConstructionLogo}>{ProjectOptions[1]}</Tile>
            <Tile img={OffThePlanLogo}>{ProjectOptions[2]}</Tile>
            <Tile img={SMSFLogo} tooltip="Self Managed Super Fund Lending">
              {ProjectOptions[3]}
            </Tile>
          </>
        ) : (
          <>
            <Tile img={ReverseMortgageLogo}>{ProjectOptions[4]}</Tile>
            <Tile img={SMSFLogo} tooltip="Self Managed Super Fund Lending">
              {ProjectOptions[3]}
            </Tile>
          </>
        )}
      </TilesContainer>
    </StepContainer>
  )
}

export default ProjectType
