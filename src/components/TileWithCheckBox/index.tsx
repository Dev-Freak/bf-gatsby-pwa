import * as React from "react"

import useToggleTile from "../../hooks/useToggleTile"

import CheckBox from "../CheckBox"
import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"

export interface TileWithCheckBoxProps {
  img: string
  children: string
  keyName?: string
  isMultiple?: true | false
}

const TileWithCheckBox: React.FC<TileWithCheckBoxProps> = ({
  img,
  children,
  keyName,
  isMultiple,
}) => {
  const { isTileToggled, isDisabled, handleToggleTile } = useToggleTile(
    keyName,
    children,
    isMultiple
  )
  const selectedStyles = isTileToggled ? "border-2 border-brand" : ""
  const disabledStyles =
    !isMultiple && isDisabled ? "cursor-not-allowed" : "cursor-pointer"
  const textStyles = !isMultiple && isDisabled ? "text-disabled" : "text-brand"
  const svgStyles = !isMultiple && isDisabled ? "tile-disabled" : "tile-idle"

  return (
    <div
      className={`tile toggleable relative h-36 w-36 shadow-md rounded-lg md:w-40 md:h-40 my-2 md:my-0 ${selectedStyles} ${disabledStyles}`}
      onClick={() => (isMultiple || !isDisabled) && handleToggleTile()}
    >
      <CheckBox
        className="absolute right-0 mt-2 mr-2"
        checked={isTileToggled}
        disabled={!isMultiple && isDisabled}
      />
      <TileContent>
        <img
          src={img}
          alt="Logo"
          className={`object-cover w-10 h-10 md:w-12 md:h-12 ${svgStyles}`}
        />
        <TileLabel className={textStyles}>{children}</TileLabel>
      </TileContent>
    </div>
  )
}

export default TileWithCheckBox
