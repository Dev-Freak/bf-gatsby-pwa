import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"

import Tile from "../../../../../components/Tile"
import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"

import {
  OneApplicantLogo,
  TwoApplicantLogo,
  ThreeApplicantLogo,
  FourApplicantLogo,
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
        <TitleWithTooltip title="How many properties?">
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
        <Tile img={OneApplicantLogo}>1</Tile>
        <Tile img={TwoApplicantLogo}>2</Tile>
        <Tile img={ThreeApplicantLogo}>3</Tile>
        <Tile img={FourApplicantLogo}>4+</Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default PropertiesQuantity
