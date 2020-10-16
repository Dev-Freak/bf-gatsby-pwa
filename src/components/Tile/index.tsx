import * as React from "react"

import TileLabel from "../Shared/TileLabel"
import TileContent from "../Shared/TileContent"
const useSelectTile = require("../../hooks/useSelectTile/index").default

export interface TileProps {
  img: any
  keyName?: string
  children: string
}

const Tile: React.FC<TileProps> = ({ img, keyName, children }) => {
  const { isTileSelected, boundSelectTile } = useSelectTile(keyName, children)
  const styles = isTileSelected ? "bg-brand" : ""
  const svgStyles = isTileSelected ? "tile-selected" : "tile-idle"
  const textStyles = isTileSelected ? "text-white" : "text-brand"

  return (
    <div
      className={`w-32 h-32 shadow-md rounded-lg cursor-pointer md:w-40 md:h-40 ${styles}`}
      onClick={() => boundSelectTile()}
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
