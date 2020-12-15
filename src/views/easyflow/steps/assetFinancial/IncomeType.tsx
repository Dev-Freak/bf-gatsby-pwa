import * as React from "react"

import Tile from "../../../../components/Tile"
import TileWithCheckBox from "../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../components/Shared/TilesContainer"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../components/Shared/Description"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../components/DynamicStepper/StepWithBackButtonContainer"
import StepWithNextAndBackButtonContainer from "../../../../components/DynamicStepper/StepWithNextAndBackButtonContainer"

import {
  PayslipLogo,
  SoleTraderLogo,
  CompanyLogo,
  TrustEntityLogo,
} from "../../../../utils/icons"

import useStore, { DataType } from "../../../../hooks/useStore"

const AssetPurchase: React.FC = () => {
  const {
    state: {
      easyFlow: { asset_purchase, asset_income_type },
    },
    boundSelectMutateAndNext,
  } = useStore()

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Type of income">Norem ipsum...</TitleWithTooltip>
        <Description>Please select your streams of income</Description>
      </StepHeader>

      <TilesContainer
        stepKeyName="asset_income_type"
        stepValue={asset_income_type}
        onTileClick={(data: DataType) => boundSelectMutateAndNext(data)}
      >
        {asset_purchase === "Personal Name" ? (
          <>
            <Tile img={PayslipLogo}>PAYG Employed (Payslips)</Tile>
            <Tile img={SoleTraderLogo}>Sole Trader</Tile>
          </>
        ) : (
          <>
            <Tile img={SoleTraderLogo}>Sole Trader</Tile>
            <Tile img={CompanyLogo}>Company</Tile>
            <Tile img={TrustEntityLogo}>Trust</Tile>
          </>
        )}
      </TilesContainer>
    </StepWithBackButtonContainer>
  )
}

export default AssetPurchase
