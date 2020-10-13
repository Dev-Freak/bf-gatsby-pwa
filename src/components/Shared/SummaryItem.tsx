import * as React from "react"

import SubTitle from "./SubTitle"
import Value from "./Value"

import { formatKey } from "../../utils/stringFormatter"

type SelectedValue = {
  [keyValue: string]: string
}

type SelectedValues = {
  [keyItem: string]: SelectedValue
}

export interface SummaryItemProps {
  itemTitle: string
  value: string | SelectedValues
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  itemTitle,
  value,
}: SummaryItemProps) => {
  const getComponents = (data: SelectedValues) => {
    if (data !== null && typeof data === "object")
      return Object.keys(value).map((key: any) => {
        const item = data[key]

        if (item !== null && typeof item === "object") {
          return (
            <React.Fragment>
              <Value>{formatKey(key)}</Value>
              <div className="px-6 pb-4">
                {Object.keys(item).map((subKey: any, index) => {
                  const subItem = item[subKey]

                  return (
                    <Value key={`value-${index}`}>{`${formatKey(
                      subKey
                    )}: ${subItem}`}</Value>
                  )
                })}
              </div>
            </React.Fragment>
          )
        } else
          return (
            <React.Fragment>
              <Value>{key}</Value>
              <div className="px-6">
                <Value>{formatKey(item)}</Value>
              </div>
            </React.Fragment>
          )
      })
  }

  const components =
    typeof value === "string" ? <Value>{value}</Value> : getComponents(value)

  return (
    <div>
      <SubTitle>{itemTitle}</SubTitle>
      {components}
    </div>
  )
}

export default SummaryItem
