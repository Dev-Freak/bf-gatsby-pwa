import * as React from "react"

import useStore, { DataType } from "../../../../hooks/useStore"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import Title from "../../../../components/Shared/Title"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"
import { ApplicationOptions } from "../../stepsOptions"

import {
  RefinanceLogo,
  FirstHomeBuyerLogo,
  InvestorLogo,
  RetirementLogo,
} from "../../../../utils/icons"

const ApplicationType: React.FC = () => {
  const {
    state: {
      easyFlow: { application_type },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <Title>Type of Application</Title>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="application_type"
        stepValue={application_type}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        <Tile img={RefinanceLogo}>{ApplicationOptions[0]}</Tile>
        <Tile img={FirstHomeBuyerLogo}>{ApplicationOptions[1]}</Tile>
        <Tile img={InvestorLogo}>{ApplicationOptions[2]}</Tile>
        <Tile img={RetirementLogo}>{ApplicationOptions[3]}</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default ApplicationType
