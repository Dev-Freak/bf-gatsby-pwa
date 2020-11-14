import * as React from "react"

import useScreenSize from "../../hooks/useScreenSize"

export type TilesContainerType = {
  stepKeyName: string
  isMultiple?: true | false
  onTileClick?: CallableFunction
  children: JSX.Element | Array<JSX.Element>
}

const TilesContainer: React.FC<TilesContainerType> = ({
  stepKeyName,
  isMultiple = true,
  children,
  onTileClick,
}) => {
  const { width } = useScreenSize()

  const mappedChildren = React.Children.map(
    children,
    (child: JSX.Element, index: number) => {
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
    }
  )

  return width > 540 ? (
    <div className="w-full flex flex-wrap justify-around space-y-1 md:justify-center md:space-x-5">
      {mappedChildren}
    </div>
  ) : (
    <React.Fragment>{mappedChildren}</React.Fragment>
  )
}

export default TilesContainer
