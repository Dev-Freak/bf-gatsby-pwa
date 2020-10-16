import * as React from "react"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../Shared/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import { EstablishedLogo, OffThePlanLogo, ConstructionLogo } from "../../utils/icons"

const ApplicationType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Project">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="project_type">
        <Tile img={EstablishedLogo}>Refinance</Tile>

        <Tile img={OffThePlanLogo}>First home buyer</Tile>

        <Tile img={ConstructionLogo}>Investor</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ApplicationType
