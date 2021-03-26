import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"

import Tile from "../../../../../components/Tile"
import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"

import {
  Property1Logo,
  Property2Logo,
  Property3Logo,
  Property4Logo,
} from "../../../../../utils/icons"

const PropertiesQuantity: React.FC = () => {
  const {
    state: {
      easyFlow: { properties_qty },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <TitleWithTooltip title="How Many Properties?">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          Please select the amount of properties that will be registered in this
          application
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="properties_qty"
        stepValue={properties_qty}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={Property1Logo}>1</Tile>
        <Tile img={Property2Logo}>2</Tile>
        <Tile img={Property3Logo}>3</Tile>
        <Tile img={Property4Logo}>4+</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default PropertiesQuantity
