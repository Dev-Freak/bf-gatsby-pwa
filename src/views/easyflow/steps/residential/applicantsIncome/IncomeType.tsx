import * as React from "react"
import _ from "lodash"

import TileWithCheckBox from "../../../../../components/TileWithCheckBox"
import TilesContainer from "../../../../../components/Shared/TilesContainer"

import {
  PayslipLogo,
  PensionCentrelinkLogo,
  SelfEmployedLogo,
  AssetsFinancialLogo,
} from "../../../../../utils/icons"

import useStore, { DataType } from "../../../../../hooks/useStore"

type IncomeTypeProps = {
  keyName: string
}

const IncomeType: React.FC<IncomeTypeProps> = ({ keyName }) => {
  const {
    state: { easyFlow },
    boundSetApplicantData,
  } = useStore()

  const value = _.get(easyFlow, `${keyName}.income_type`) ?? null

  return (
    <TilesContainer
      isMultiple
      stepValue={value}
      stepKeyName={`${keyName}.income_type`}
      onTileClick={(data: DataType) => boundSetApplicantData(data)}
    >
      <TileWithCheckBox img={PayslipLogo}>PAYG Employed (Payslip)</TileWithCheckBox>
      <TileWithCheckBox img={PensionCentrelinkLogo}>
        Pension Centrelink
      </TileWithCheckBox>
      <TileWithCheckBox img={SelfEmployedLogo}>Self Employed</TileWithCheckBox>
      <TileWithCheckBox img={AssetsFinancialLogo}>Contract</TileWithCheckBox>
    </TilesContainer>
  )
}

export default IncomeType
