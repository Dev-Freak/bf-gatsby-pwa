import * as React from "react"

import useStore, { DataType } from "../../../../hooks/useStore"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import {
  RefinanceLogo,
  FirstHomeBuyerLogo,
  InvestorLogo,
  RetirementLogo,
} from "../../../../utils/icons"

const ApplicationType: React.FC = () => {
  const {
    state: {
      easyFlow: { applicant_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Application">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="applicant_type"
        stepValue={applicant_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={RefinanceLogo}>Refinance</Tile>

        <Tile img={FirstHomeBuyerLogo}>First home buyer</Tile>

        <Tile img={InvestorLogo}>Investor</Tile>

        <Tile img={RetirementLogo}>Retirement</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default ApplicationType
