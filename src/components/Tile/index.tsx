import * as React from "react"
import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"

import useFirstRenderDisabledEffect from "../../hooks/useFirstRenderDisabledEffect"

export interface TileProps {
  img: any
  children: string
  keyName?: string
  selected?: true | false
  onSelect?: CallableFunction
}

const Tile: React.FC<TileProps> = ({
  img,
  children,
  onSelect,
  keyName = "unknown",
  selected = false,
}) => {
  const isFirstRender = useFirstRenderDisabledEffect()
  const [isSelected, setIsSelected] = React.useState<boolean>(selected ?? false)

  React.useEffect(() => {
    if (!isFirstRender && isSelected !== selected) {
      console.log({ keyName, value: children })
      const timeOut = setTimeout(() => {
        onSelect?.({ keyName, value: children })
      }, 300)

      return () => clearTimeout(timeOut)
    }
  }, [isSelected])

  const handleSelect = () => {
    if (selected) onSelect?.({ keyName, value: children })
    else setIsSelected(true)
  }

  const styles = isSelected ? "bg-brand" : ""
  const svgStyles = isSelected ? "tile-selected" : "tile-idle"
  const textStyles = isSelected ? "text-white" : "text-brand"

  return (
    <div
      className={`tile selectable w-32 h-32 shadow-md rounded-lg cursor-pointer md:w-40 md:h-40 my-2 md:my-0 ${styles}`}
      onClick={() => handleSelect()}
    >
      <TileContent>
        <img
          src={img}
          alt="Logo"
          className={`object-cover w-10 h-10 md:w-12 md:h-12 ${svgStyles}`}
        />
        <TileLabel className={textStyles}>{children.replace(/[_]/g, " ")}</TileLabel>
      </TileContent>
    </div>
  )
}

export default Tile
