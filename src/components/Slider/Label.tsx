import * as React from "react"

export type LabelProps = {
  children: string
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <span className={"absolute text-sliderLabel mt-10"}>{children}</span>
}

export default Label
