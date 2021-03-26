import * as React from "react"
import Tile from "../../../components/Tile"
import TilesContainer from "../../../components/Shared/TilesContainer"
import Title from "../../../components/Shared/Title"
import Description from "../../../components/Shared/Description"
import StepHeader from "../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../components/DynamicStepper/StepContainer"
import { PathOptions } from "../stepsOptions"

import {
  FastCar1Logo,
  CommercialLogo,
  ResidentialLogo,
  OtherLogo,
} from "../../../utils/icons"

import useStore, { DataType } from "../../../hooks/useStore"

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
        <Title>Welcome</Title>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="path"
        stepValue={path}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        <Tile img={FastCar1Logo}>{PathOptions[0]}</Tile>
        <Tile img={ResidentialLogo}>{PathOptions[1]}</Tile>
        <Tile img={CommercialLogo}>{PathOptions[2]}</Tile>
        <Tile img={OtherLogo}>{PathOptions[3]}</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default Welcome
