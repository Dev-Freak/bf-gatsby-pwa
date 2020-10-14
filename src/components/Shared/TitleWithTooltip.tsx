import * as React from "react"

import Title from "./Title"
import Tooltip from "../Tooltip"

export interface TitleWithTooltipProps {
  title: string
  children: string
}

const TitleWithTooltip: React.FC<TitleWithTooltipProps> = ({ title, children }) => {
  return (
    <div className="flex ">
      <Title>{title}</Title>
      <Tooltip>{children}</Tooltip>
    </div>
  )
}

export default TitleWithTooltip
