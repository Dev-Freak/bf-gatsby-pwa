import * as React from "react"

import Tile from "../Tile"

import useScreenSize from "../../hooks/useScreenSize"

export type TilesContainerType = {
  stepKeyName: string
  stepValue: any
  isMultiple?: true | false
  onTileClick?: CallableFunction
}

const TilesContainer: React.FC<TilesContainerType> = ({
  stepKeyName,
  stepValue,
  children,
  isMultiple = false,
  onTileClick: onTileSelect,
}) => {
  const { isMobile } = useScreenSize()

  const mappedChildren = (items: JSX.Element | Array<JSX.Element>) =>
    React.Children.map(items, (child: JSX.Element, index: number) => {
      let props = {}
      const childType = child.type

      props =
        childType === Tile
          ? {
              key: `child-${index}`,
              keyName: stepKeyName,
              onSelect: onTileSelect ?? undefined,
              selected: stepValue === child.props.children,
            }
          : {
              key: `child-${index}`,
              keyName: isMultiple ? `${stepKeyName}[]` : stepKeyName,
              isMultiple: isMultiple,
              onSelect: onTileSelect ?? undefined,
              selected: stepValue?.includes(child.props.children),
              selectedIndex: stepValue?.indexOf(child.props.children),
              disabled:
                !isMultiple &&
                stepValue !== null &&
                stepValue !== undefined &&
                stepValue.length !== 0 &&
                !stepValue.includes(child.props.children),
            }

      return React.cloneElement(child as JSX.Element, { ...props })
    })

  let components: JSX.Element | React.FunctionComponentElement<any>[]
  if (React.Children.count(children) === 1) {
    const child = React.Children.only(children) as JSX.Element
    const childType = child?.type.toString()

    const isFragment = childType.indexOf("fragment") != -1

    components = isFragment
      ? mappedChildren(child?.props?.children)
      : mappedChildren(child)
  } else {
    components = mappedChildren(children as JSX.Element | JSX.Element[])
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
