import * as React from "react"
import _ from "lodash"

import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TileWithCheckBox from "../../../../../components/TileWithCheckBox"

import {
  SoleTraderLogo,
  CompanyLogo,
  TrustEntityLogo,
} from "../../../../../utils/icons"

import useStore, { DataType } from "../../../../../hooks/useStore"

type SelfEmploymentTypeProps = {
  keyName: string
}

const SelfEmploymentType: React.FC<SelfEmploymentTypeProps> = ({ keyName }) => {
  const {
    state: { easyFlow },
    boundToggleTile,
  } = useStore()

  const value = _.get(easyFlow, `${keyName}.self_employment_type`) ?? null

  return (
    <TilesContainer
      isMultiple
      stepValue={value}
      stepKeyName={`${keyName}.self_employment_type`}
      onTileClick={(data: DataType) => boundToggleTile(data)}
    >
      <TileWithCheckBox img={SoleTraderLogo}>Sole trader</TileWithCheckBox>

      <TileWithCheckBox img={CompanyLogo}>Company</TileWithCheckBox>

      <TileWithCheckBox img={TrustEntityLogo}>Trust</TileWithCheckBox>
    </TilesContainer>
  )
}

export default SelfEmploymentType
