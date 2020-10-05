import * as React from "react"
import PropTypes from "prop-types"

import CheckBox from "../CheckBox"

export interface TileWithCheckBoxProps {
  img: string
  text: string
  isSelected?: boolean
  isDisabled?: boolean
  onSelect(text: string): VoidFunction
}

const TileWithCheckBox: React.FC<TileWithCheckBoxProps> = ({
  img,
  text,
  isSelected,
  isDisabled,
  onSelect,
}) => {
  const selectedStyles = isSelected && "border-2 border-brand"
  const disabledStyles = isDisabled ? "cursor-not-allowed" : "cursor-pointer"
  const textStyles = isDisabled ? "text-disabled" : "text-brand"
  const svgStyles = isDisabled ? "tile-disabled" : "tile-idle"

  return (
    <div
      className={`relative h-36 w-36 shadow-md rounded-lg md:w-40 md:h-40 ${selectedStyles} ${disabledStyles}`}
      onClick={() => !isDisabled && onSelect(text)}
    >
      <CheckBox
        className="absolute right-0 mt-2 mr-2"
        checked={isSelected}
        disabled={isDisabled}
      />
      <div
        className={`p-2 w-full h-full flex flex-col flex-1 items-center justify-center space-y-4`}
      >
        <img
          src={img}
          alt="Logo"
          className={`object-cover w-10 h-10 md:w-12 md:h-12 ${svgStyles}`}
        />
        <p className={textStyles}>{text}</p>
      </div>
    </div>
  )
}

TileWithCheckBox.propTypes = {
  img: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
}

TileWithCheckBox.defaultProps = {
  isSelected: false,
  isDisabled: false,
}

export default TileWithCheckBox
