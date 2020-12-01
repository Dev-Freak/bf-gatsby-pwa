import * as React from "react"

import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TileWithCheckBox from "../../../../../components/TileWithCheckBox"

import { FullTimeLogo, PartTimeLogo, CasualLogo } from "../../../../../utils/icons"

type EmploymentTypeProps = {
  keyName: string
}

const EmploymentType: React.FC<EmploymentTypeProps> = ({ keyName }) => {
  return (
    <TilesContainer stepKeyName={`${keyName}.employment_type`} isMultiple={false}>
      <TileWithCheckBox img={CasualLogo}>Casual</TileWithCheckBox>

      <TileWithCheckBox img={PartTimeLogo}>Part-time</TileWithCheckBox>

      <TileWithCheckBox img={FullTimeLogo}>Full-time</TileWithCheckBox>
    </TilesContainer>
  )
}

export default EmploymentType
