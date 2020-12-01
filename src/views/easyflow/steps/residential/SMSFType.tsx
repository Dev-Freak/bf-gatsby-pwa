import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import { ResidentialLogo, CommercialLogo } from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

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
