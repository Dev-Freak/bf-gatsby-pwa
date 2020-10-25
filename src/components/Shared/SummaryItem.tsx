import * as React from "react"

import SubTitle from "./SubTitle"
import Value from "./Value"

import { formatKey } from "../../utils/stringFormatter"

type SelectedValue = {
  [key: string]: string | SelectedValue
}

export type SummaryItemProps = {
  itemTitle: string
  value: string | SelectedValue
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  itemTitle,
  value,
}: SummaryItemProps) => {
  const getComponents = (data: SelectedValue) => {
    if (data !== null && typeof data === "object")
      return Object.keys(value).map((key: any) => {
        const item = data[key]

        if (item !== null && typeof item === "object") {
          return (
            <div className="pb-5" key={key}>
              <Value>{formatKey(key)}</Value>
              <div className="px-6">
                {Object.keys(item).map((subKey: any, index) => {
                  const subItem = item[subKey]

                  return (
                    <Value key={`value-${index}`}>
                      {`${formatKey(subKey)}: ${subItem}`}
                    </Value>
                  )
                })}
              </div>
            </div>
          )
        } else
          return (
            <div className="pb-5">
              <Value>{key}</Value>
              <div className="px-6">
                <Value>{formatKey(item.toString())}</Value>
              </div>
            </div>
          )
      })
  }

  const components =
    typeof value === "string" ? <Value>{value}</Value> : getComponents(value)

  return (
    <div className="pb-4">
      <SubTitle>{itemTitle}</SubTitle>
      {components}
    </div>
  )
}

export default SummaryItem
