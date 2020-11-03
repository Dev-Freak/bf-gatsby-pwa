import * as React from "react"

import Node from "./Node"
import Label from "./Label"

export type StepProps = {
  label: string
  value: number
  isSelected?: true | false
  onClick: CallableFunction
}

const Step: React.FC<StepProps> = ({ label, value, isSelected, onClick }) => {
  return (
    <div className="relative">
      <Node onClick={() => onClick(value)} />
      <Label>{label}</Label>
    </div>
  )
}

export default Step
