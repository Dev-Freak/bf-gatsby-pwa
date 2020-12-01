import * as React from "react"

import useStore, { DataType } from "../../hooks/useStore"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../DynamicStepper/StepWithBackButtonContainer"

import { ResidentialLogo, CommercialLogo } from "../../utils/icons"

const SMSFType: React.FC = () => {
  const {
    state: {
      easyFlow: { smsf_type },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of SMSF">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="smsf_type"
        stepValue={smsf_type}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        <Tile img={ResidentialLogo}>Residential</Tile>

        <Tile img={CommercialLogo}>Commercial</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default SMSFType
