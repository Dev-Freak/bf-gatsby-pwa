import * as React from "react"

import { firstCharToUpper } from "../../utils/stringFormatter"

export type SubTitleProps = {
  children: string
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <h2 className="font-bold text-sm">{firstCharToUpper(children)}</h2>
}

export default SubTitle
