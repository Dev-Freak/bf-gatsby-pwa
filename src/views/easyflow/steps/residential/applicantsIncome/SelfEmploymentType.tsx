import * as React from "react"

import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TileWithCheckBox from "../../../../../components/TileWithCheckBox"

import {
  SoleTraderLogo,
  CompanyLogo,
  TrustEntityLogo,
} from "../../../../../utils/icons"

type SelfEmploymentTypeProps = {
  keyName: string
}

const SelfEmploymentType: React.FC<SelfEmploymentTypeProps> = ({ keyName }) => {
  return (
    <TilesContainer stepKeyName={`${keyName}.self_employment_type`}>
      <TileWithCheckBox img={SoleTraderLogo}>Sole trader</TileWithCheckBox>

      <TileWithCheckBox img={CompanyLogo}>Company</TileWithCheckBox>

      <TileWithCheckBox img={TrustEntityLogo}>Trust</TileWithCheckBox>
    </TilesContainer>
  )
}

export default SelfEmploymentType
