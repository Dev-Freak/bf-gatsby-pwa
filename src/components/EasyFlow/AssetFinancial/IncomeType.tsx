import * as React from "react"

import Tile from "../../Tile"
import TileWithCheckBox from "../../TileWithCheckBox"
import TilesContainer from "../../Shared/TilesContainer"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import Description from "../../Shared/Description"
import StepHeader from "../../DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../DynamicStepper/StepWithBackButtonContainer"
import StepWithNextAndBackButtonContainer from "../../DynamicStepper/StepWithNextAndBackButtonContainer"

import {
  PayslipLogo,
  SoleTraderLogo,
  CompanyLogo,
  TrustEntityLogo,
} from "../../../utils/icons"

import useStore from "../../../hooks/useStore"

const AssetPurchase: React.FC = () => {
  const {
    state: {
      easyFlow: { asset_purchase },
    },
  } = useStore()

  const header = (
    <StepHeader>
      <TitleWithTooltip title="Type of income">Norem ipsum...</TitleWithTooltip>
      <Description>Please select your streams of income</Description>
    </StepHeader>
  )

  const component =
    asset_purchase === "Personal Name" ? (
      <StepWithBackButtonContainer>
        {header}

        <TilesContainer stepKeyName="asset_income_type">
          <Tile img={PayslipLogo}>PAYG Employed (Payslips)</Tile>
        </TilesContainer>
      </StepWithBackButtonContainer>
    ) : (
      <StepWithNextAndBackButtonContainer>
        {header}

        <TilesContainer stepKeyName="asset_income_type">
          <TileWithCheckBox img={SoleTraderLogo}>Sole Trader</TileWithCheckBox>

          <TileWithCheckBox img={CompanyLogo}>Company</TileWithCheckBox>

          <TileWithCheckBox img={TrustEntityLogo}>Trust</TileWithCheckBox>
        </TilesContainer>
      </StepWithNextAndBackButtonContainer>
    )

  return component
}

export default AssetPurchase
