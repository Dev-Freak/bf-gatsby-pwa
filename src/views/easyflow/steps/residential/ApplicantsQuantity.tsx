import * as React from "react"

import useStore, { DataType } from "../../../../hooks/useStore"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import {
  OneApplicantLogo,
  TwoApplicantLogo,
  ThreeApplicantLogo,
  FourApplicantLogo,
} from "../../../../utils/icons"

const ApplicantsQuantity: React.FC = () => {
  const {
    state: {
      easyFlow: { applicants_qty },
    },
    boundSetApplicantsQuantity,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <TitleWithTooltip title="How many applicants?">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the amount of applicants that will be registered in this
          application
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="applicants_qty"
        stepValue={applicants_qty}
        onTileClick={(data: DataType) =>
          boundSetApplicantsQuantity(parseInt(data.value.split(" ")[0]))
        }
      >
        <Tile img={OneApplicantLogo}>1 Applicant</Tile>

        <Tile img={TwoApplicantLogo}>2 Applicants</Tile>

        <Tile img={ThreeApplicantLogo}>3 Applicants</Tile>

        <Tile img={FourApplicantLogo}>4 Applicants</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default ApplicantsQuantity
