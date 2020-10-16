import * as React from "react"

export interface TileLabelProps {
  className: string
  children: string
}

const TileLabel: React.FC<TileLabelProps> = ({ className, children }) => {
  return <p className={`w-11/12 text-center text-sm ${className}`}>{children}</p>
}

export default TileLabel
