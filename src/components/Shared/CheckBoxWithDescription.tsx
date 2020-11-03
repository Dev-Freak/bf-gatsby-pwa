import * as React from "react"

import CheckBox from "./CheckBox"
import Desciption from "./Description"

export type CheckBoxWithDescriptionProps = {
  checked: true | false
  children: string
  onToggleCheck: CallableFunction
}

const CheckBoxWithDescription: React.FC<CheckBoxWithDescriptionProps> = ({
  checked,
  children,
  onToggleCheck,
}) => {
  return (
    <div className="flex space-x-2">
      <CheckBox checked={checked} onClick={onToggleCheck} />
      <Desciption isBold>{children}</Desciption>
    </div>
  )
}

export default CheckBoxWithDescription
