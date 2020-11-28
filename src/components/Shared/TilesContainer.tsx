import { isError } from "lodash"
import { string } from "prop-types"
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
  const isMobile = width <= 540

  const mappedChildren = (items: JSX.Element | Array<JSX.Element>) =>
    React.Children.map(items, (child: JSX.Element, index: number) => {
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

      return React.cloneElement(child as JSX.Element, { ...props })
    })

  let components = null
  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children)
    const childType = child?.type.toString()

    const isFragment = childType.indexOf("fragment") != -1

    components = isFragment
      ? mappedChildren(child.props.children)
      : mappedChildren(child)
  } else {
    components = mappedChildren(children)
  }

  return isMobile ? (
    components
  ) : (
    <div className="w-full flex flex-wrap justify-around space-y-1 md:justify-center md:space-x-5">
      {components}
    </div>
  )
}

export default TilesContainer
