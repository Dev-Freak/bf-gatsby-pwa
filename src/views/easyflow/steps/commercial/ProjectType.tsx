import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import {
  ResidentialLogo,
  CommercialLogo,
  PurchaseLogo,
  ConstructionLogo,
} from "../../../../utils/icons"

import useStore from "../../../../hooks/useStore"

const ProjectType: React.FC = () => {
  const {
    state: {
      easyFlow: { commercial_type },
    },
  } = useStore()

  const tiles =
    commercial_type !== "Development" ? (
      <React.Fragment>
        <Tile img={ResidentialLogo}>Residential Zoned</Tile>

        <Tile img={CommercialLogo}>Commercial Zoned</Tile>

        <Tile img={PurchaseLogo}>Purchase</Tile>
      </React.Fragment>
    ) : (
      <Tile img={ConstructionLogo}>Construction Funding</Tile>
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
