import * as React from "react"

import Tile from "../../Tile"
import TilesContainer from "../../Shared/TilesContainer"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import Description from "../../Shared/Description"
import StepHeader from "../../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../DynamicStepper/StepWithBackButtonContainer"

import {
  DANotAppliedLogo,
  DAPendingLogo,
  DAApprovedLogo,
} from "../../../utils/icons"

const CommercialType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Development">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="development_type">
        <Tile img={DANotAppliedLogo}>DA no applied for</Tile>

        <Tile img={DAPendingLogo}>Pending DA approval</Tile>

        <Tile img={DAApprovedLogo}>DA approved</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default CommercialType
