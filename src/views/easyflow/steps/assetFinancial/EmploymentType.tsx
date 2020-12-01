import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"

import { CasualLogo, PartTimeLogo, FullTimeLogo } from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const AssetType: React.FC = () => {
  const {
    state: {
      easyFlow: { employment_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of employment">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the most relevant option to your circumstances
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="employment_type"
        stepValue={employment_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={CasualLogo}>Casual</Tile>

        <Tile img={PartTimeLogo}>Part-time</Tile>

        <Tile img={FullTimeLogo}>Full-time</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default AssetType
