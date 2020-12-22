import * as React from "react"

import SubTitle from "./SubTitle"
import Value from "./Value"

import { formatKey } from "../../utils/stringFormatter"

type SelectedValue = {
  [key: string]: string
}

export type SummaryItemProps = {
  itemTitle: string
  value: string | SelectedValue
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  itemTitle,
  value,
}: SummaryItemProps) => {
  const getComponents = (item: SelectedValue) => {
    if (item !== null && typeof item === "object")
      return Object.keys(item).map((itemKey: any) => {
        const subItemFirstLevel: any = item[itemKey]

        if (subItemFirstLevel !== null && typeof subItemFirstLevel === "object") {
          return (
            <div className="pb-5" key={itemKey}>
              <Value>{formatKey(itemKey)}</Value>
              <div className="px-6">
                {Object.keys(subItemFirstLevel).map(
                  (subItemFirstLevelKey: any, index: number) => {
                    const subItemSecondLevel: Array<string> | string =
                      subItemFirstLevel[subItemFirstLevelKey]

                    // JOIN(', ') is needed since use of backtick characters (``) automatically adds the comma WITHOUT space (,) between each selected item
                    return (
                      <Value key={`value-${index}`}>
                        {`${formatKey(subItemFirstLevelKey)}: ${
                          Array.isArray(subItemSecondLevel)
                            ? subItemSecondLevel.join(", ")
                            : subItemSecondLevel
                        }`}
                      </Value>
                    )
                  }
                )}
              </div>
            </div>
          )
        } else {
          return (
            <div className="pb-5">
              <Value>{formatKey(itemKey)}</Value>
              <div className="px-6">
                <Value>{`${formatKey(subItemFirstLevel)}`}</Value>
              </div>
            </div>
          )
        }
      })
  }

  return (
    <div className="pb-4">
      <SubTitle>{formatKey(itemTitle)}</SubTitle>
      {typeof value === "string" ? (
        <Value>{formatKey(value)}</Value>
      ) : (
        getComponents(value)
      )}
    </div>
  )
}

export default SummaryItem
