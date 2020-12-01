import * as React from "react"

import TileWithCheckBox from "../../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../../components/Shared/TilesContainer"

import {
  PayslipLogo,
  PensionCentrelinkLogo,
  SelfEmployedLogo,
} from "../../../../../utils/icons"

type IncomeTypeProps = {
  keyName: string
}

const IncomeType: React.FC<IncomeTypeProps> = ({ keyName }) => {
  return (
    <TilesContainer stepKeyName={`${keyName}.income_type`}>
      <TileWithCheckBox img={PayslipLogo}>PAYG Employed (Payslip)</TileWithCheckBox>

      <TileWithCheckBox img={PensionCentrelinkLogo}>
        Pension Centrelink
      </TileWithCheckBox>

      <TileWithCheckBox img={SelfEmployedLogo}>Self Employed</TileWithCheckBox>
    </TilesContainer>
  )
}

export default IncomeType
