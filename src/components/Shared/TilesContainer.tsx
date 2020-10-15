import * as React from "react"

type TilesContainerType = {
  stepKeyName: string
}

const TilesContainer: React.FC<TilesContainerType> = ({ stepKeyName, children }) => {
  return (
    <div className="w-full flex flex-wrap justify-around space-y-1 md:justify-center md:space-x-5">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          key: `child-${index}`,
          keyName: stepKeyName,
        })
      })}
    </div>
  )
}

export default TilesContainer
