import * as React from "react"
import PropTypes from "prop-types"

import CheckBox from "../CheckBox"
import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"

const useToggleTile = require("../../hooks/useToggleTile/index").default

export interface TileWithCheckBoxProps {
  img: string
  children: string
  keyName?: string
  isDisabled?: boolean
}

const TileWithCheckBox: React.FC<TileWithCheckBoxProps> = ({
  img,
  children,
  keyName,
  isDisabled,
}) => {
  const { isTileToggled, boundToggleTile } = useToggleTile(keyName, children)
  const selectedStyles = isTileToggled && "border-2 border-brand"
  const disabledStyles = isDisabled ? "cursor-not-allowed" : "cursor-pointer"
  const textStyles = isDisabled ? "text-disabled" : "text-brand"
  const svgStyles = isDisabled ? "tile-disabled" : "tile-idle"

  return (
    <div
      className={`relative h-36 w-36 shadow-md rounded-lg md:w-40 md:h-40 ${selectedStyles} ${disabledStyles}`}
      onClick={() => !isDisabled && boundToggleTile(children)}
    >
      <CheckBox
        className="absolute right-0 mt-2 mr-2"
        checked={isTileToggled}
        disabled={isDisabled}
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

TileWithCheckBox.propTypes = {
  img: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
}

TileWithCheckBox.defaultProps = {
  isDisabled: false,
}

export default TileWithCheckBox
