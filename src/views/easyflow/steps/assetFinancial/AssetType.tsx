import * as React from "react"

import Tile from "../../../../components/Tile"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import Title from "../../../../components/Shared/Title"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import {
  EquipmentPlantLogo,
  VehiclePurchaseLogo,
  CreditCardLogo,
  CashflowLendingLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const AssetType: React.FC = () => {
  const {
    state: {
      easyFlow: { asset_type },
    },
    boundSelectAndNext,
  } = useStore()

  return (
    <StepContainer back>
      <StepHeader>
        <Title>Type of Asset</Title>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="asset_type"
        stepValue={asset_type}
        onTileClick={(data: DataType) => boundSelectAndNext(data)}
      >
        <Tile img={EquipmentPlantLogo}>Equipment / Plant</Tile>

        <Tile img={VehiclePurchaseLogo}>Vehicle Purchase</Tile>

        <Tile img={CreditCardLogo}>Personal Loan / Credit Cards</Tile>

        <Tile img={CashflowLendingLogo} tooltip="Struggling for business cash flow?">
          Cashflow Lending
        </Tile>
      </TilesContainer>
    </StepContainer>
  )
}

export default AssetType
