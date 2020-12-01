import * as React from "react"

import useStore, { DataType } from "../../hooks/useStore"

import Tile from "../Tile"
import TilesContainer from "../Shared/TilesContainer"
import TitleWithTooltip from "../Shared/TitleWithTooltip"
import Description from "../Shared/Description"
import StepHeader from "../DynamicStepper/StepHeader"
import StepContainer from "../DynamicStepper/StepContainer"

import {
  AssetsFinancialLogo,
  CommercialLogo,
  ResidentialLogo,
  OtherLogo,
} from "../../utils/icons"

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
