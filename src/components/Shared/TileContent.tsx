import * as React from "react"

const TileContent: React.FC = ({ children }) => {
  return (
    <div
      className={`p-2 w-full h-full flex flex-col flex-1 items-center justify-center space-y-4`}
    >
      {children}
    </div>
  )
}

export default TileContent
