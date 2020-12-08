import * as React from "react"

import CheckBox from "../Shared/CheckBox"
import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"

import useFirstRenderDisabledEffect from "../../hooks/useFirstRenderDisabledEffect"

export interface TileWithCheckBoxProps {
  img: string
  children: string
  keyName?: string
  selectedIndex?: number
  selected?: true | false
  disabled?: true | false
  isMultiple?: true | false
  onSelect?: CallableFunction
}

const TileWithCheckBox: React.FC<TileWithCheckBoxProps> = ({
  img,
  children,
  keyName = "unknown",
  isMultiple = true,
  selected = false,
  disabled = false,
  onSelect,
}) => {
  const isFirstRender = useFirstRenderDisabledEffect()
  const [isSelected, setIsSelected] = React.useState(selected ?? false)

  React.useEffect(() => {
    if (!isFirstRender) onSelect?.({ keyName, value: children })
  }, [isSelected])

  const handleToggleTile = () => setIsSelected(prev => !prev)

  const selectedStyles = isSelected ? "border-2 border-brand" : ""
  const disabledStyles =
    !isMultiple && disabled ? "cursor-not-allowed" : "cursor-pointer"
  const textStyles = !isMultiple && disabled ? "text-disabled" : "text-brand"
  const svgStyles = !isMultiple && disabled ? "tile-disabled" : "tile-idle"

  return (
    <div
      className={`tile toggleable relative h-36 w-36 shadow-md rounded-lg md:w-40 md:h-40 my-2 md:my-0 ${selectedStyles} ${disabledStyles}`}
      onClick={() => (isMultiple || !disabled) && handleToggleTile()}
    >
      <CheckBox
        className="absolute right-0 mt-2 mr-2"
        checked={isSelected as boolean}
        disabled={!isMultiple && disabled}
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
