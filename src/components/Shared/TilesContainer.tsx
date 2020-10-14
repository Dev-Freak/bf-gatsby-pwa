import * as React from "react"

const TilesContainer: React.FC = ({ children }) => {
  return (
    <div className="w-full flex flex-wrap justify-around space-y-1 md:justify-center md:space-x-5">
      {children}
    </div>
  )
}

export default TilesContainer
