import * as React from "react"

import useStore, { DataType } from "../../../hooks/useStore"

import Tile from "../../../components/Tile"
import TilesContainer from "../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../components/Shared/TitleWithTooltip"
import Description from "../../../components/Shared/Description"
import StepHeader from "../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../components/DynamicStepper/StepContainer"

import {
  AssetsFinancialLogo,
  CommercialLogo,
  ResidentialLogo,
  OtherLogo,
} from "../../../utils/icons"

const Welcome: React.FC = () => {
  const {
    state: {
      easyFlow: { path },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepContainer>
      <StepHeader>
        <TitleWithTooltip title="Welcome">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="path"
        stepValue={path}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        <Tile img={AssetsFinancialLogo}>Asset financial</Tile>

        <Tile img={ResidentialLogo}>Residential</Tile>

        <Tile img={CommercialLogo}>Commercial</Tile>

        <Tile img={OtherLogo}>Other financial enquiries</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default Welcome
