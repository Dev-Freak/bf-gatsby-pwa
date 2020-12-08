import * as React from "react"

import TilesContainer from "../../../../../components/Shared/TilesContainer"
import TileWithCheckBox from "../../../../../components/TileWithCheckBox"

import { FullTimeLogo, PartTimeLogo, CasualLogo } from "../../../../../utils/icons"

import useStore, { DataType } from "../../../../../hooks/useStore"

type EmploymentTypeProps = {
  keyName: string
}

const EmploymentType: React.FC<EmploymentTypeProps> = ({ keyName }) => {
  const {
    state: { easyFlow },
    boundToggleTile,
  } = useStore()

  const value = _.get(easyFlow, `${keyName}.employment_type`) ?? null

  return (
    <TilesContainer
      stepValue={value}
      stepKeyName={`${keyName}.employment_type`}
      onTileClick={(data: DataType) => boundToggleTile(data)}
    >
      <TileWithCheckBox img={CasualLogo}>Casual</TileWithCheckBox>

      <TileWithCheckBox img={PartTimeLogo}>Part-time</TileWithCheckBox>

      <TileWithCheckBox img={FullTimeLogo}>Full-time</TileWithCheckBox>
    </TilesContainer>
  )
}

export default EmploymentType
