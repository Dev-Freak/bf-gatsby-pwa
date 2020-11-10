import * as React from "react"

import Tile from "../../Tile"
import TilesContainer from "../../Shared/TilesContainer"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import Description from "../../Shared/Description"
import StepHeader from "../../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../DynamicStepper/StepWithBackButtonContainer"

import {
  EquipmentPlanLogo,
  VehiclePurchaseLogo,
  CreditCardLogo,
  CashflowLendingLogo,
} from "../../../utils/icons"

const AssetType: React.FC = () => {
  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of Asset">Norem ipsum...</TitleWithTooltip>
        <Description>
          Please select the most relevant option to your needs
        </Description>
      </StepHeader>

      <TilesContainer stepKeyName="asset_type">
        <Tile img={EquipmentPlanLogo}>Equipment Plan</Tile>

        <Tile img={VehiclePurchaseLogo}>Vehicle Purchase</Tile>

        <Tile img={CreditCardLogo}>Personal Loan / Credit Cards</Tile>

        <Tile img={CashflowLendingLogo}>Cashflow Lending</Tile>
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default AssetType
