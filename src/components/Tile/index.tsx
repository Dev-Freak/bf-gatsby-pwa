import * as React from "react"
import useSelectTile from "../../hooks/useSelectTile"

import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"

export interface TileProps {
  img: any
  keyName?: string
  children: string
  onClick?: CallableFunction
}

const Tile: React.FC<TileProps> = ({ img, keyName, children, onClick }) => {
  const { isTileSelected, handleSelectTile } = useSelectTile(
    keyName,
    children,
    onClick
  )

  const styles = isTileSelected ? "bg-brand" : ""
  const svgStyles = isTileSelected ? "tile-selected" : "tile-idle"
  const textStyles = isTileSelected ? "text-white" : "text-brand"

  return (
    <div
      className={`w-32 h-32 shadow-md rounded-lg cursor-pointer md:w-40 md:h-40 ${styles}`}
      onClick={() => handleSelectTile()}
    >
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

export default Tile
