import * as React from "react"

import SubTitle from "./SubTitle"
import Value from "./Value"

import { formatKey, formatCurrency } from "../../utils/stringFormatter"
import { isNumber, isString } from "lodash"

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
        const subItemFirstLevel = item[itemKey]

        console.log(`Key: ${itemKey} - Value: ${JSON.stringify(subItemFirstLevel)}`)

        if (subItemFirstLevel !== null && typeof subItemFirstLevel === "object") {
          return (
            <div className="pb-5" key={itemKey}>
              <Value>{formatKey(itemKey)}</Value>
              <div className="px-6">
                {Object.keys(subItemFirstLevel).map(
                  (subItemFirstLevelKey: any, index) => {
                    const subItemSecondLevel =
                      subItemFirstLevel[subItemFirstLevelKey]

                    console.log(
                      `Key: ${subItemFirstLevelKey} - Value: ${subItemSecondLevel}`
                    )

                    // Use of backtick characters (``) automatically adds the comma WITHOUT space (,) between each selected item
                    return (
                      <Value key={`value-${index}`}>
                        {`${formatKey(subItemFirstLevelKey)}: ${subItemSecondLevel}`}
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

  const components =
    typeof value === "string" ? (
      <Value>{formatKey(value)}</Value>
    ) : (
      getComponents(value)
    )

  return (
    <div className="pb-4">
      <SubTitle>{formatKey(itemTitle)}</SubTitle>
      {components}
    </div>
  )
}

export default SummaryItem
