import * as React from "react"

export interface NestedItemProps {}

const NestedItem: React.FC<NestedItemProps> = ({ children }) => {
  return <div className={`flex items-center justify-start`}>{children}</div>
}

export default NestedItem
