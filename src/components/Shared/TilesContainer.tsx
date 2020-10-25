import * as React from "react"

export type TilesContainerType = {
  stepKeyName: string
  isMultiple?: true | false
  onTileClick?: CallableFunction
}

const TilesContainer: React.FC<TilesContainerType> = ({
  stepKeyName,
  isMultiple = true,
  children,
  onTileClick,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-around space-y-1 md:justify-center md:space-x-5">
      {React.Children.map(children, (child, index) => {
        let props = {}
        const childType = child["type"]["displayName"]

        props =
          childType === "Tile"
            ? {
                key: `child-${index}`,
                keyName: stepKeyName,
                onClick: onTileClick ?? null,
              }
            : {
                key: `child-${index}`,
                keyName: isMultiple ? `${stepKeyName}[]` : stepKeyName,
                isMultiple: isMultiple,
                onClick: onTileClick ?? null,
              }

        return React.cloneElement(child as React.ReactElement, props)
      })}
    </div>
  )
}

export default TilesContainer
