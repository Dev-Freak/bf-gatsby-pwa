import * as React from "react"
import PropTypes from "prop-types"

export interface TileProps {
  children: string
  img: any
  isSelected?: Boolean
}

const Tile: React.FC<TileProps> = ({ isSelected, children, img }) => {
  const styles = isSelected ? "bg-brand" : ""
  const svgStyles = isSelected ? "tile-selected" : "tile-idle"
  const textStyles = isSelected ? "text-white" : "text-brand"

  return (
    <div
      className={`w-32 h-32 shadow-md rounded-lg cursor-pointer md:w-40 md:h-40 ${styles}`}
      onClick={() => {}}
    >
      <div
        className={`p-2 w-full h-full flex flex-col flex-1 items-center justify-center space-y-4`}
      >
        <img
          src={img}
          alt="Logo"
          className={`object-cover w-10 h-10 md:w-12 md:h-12 ${svgStyles}`}
        />
        <p className={`text-center text-sm ${textStyles}`}>{children}</p>
      </div>
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
}

Tile.defaultProps = {
  isSelected: false,
}

export default Tile
