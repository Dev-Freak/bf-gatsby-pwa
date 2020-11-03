import * as React from "react"

import Lable from "./Lable"
import Input, { InputType } from "./Input"
import InputContainer from "./InputContainer"

export type InputElementProps = {
  lable: string
  type?: "input" | "ddl"
  options?: InputType
  required?: true | false
}

const InputElement: React.FC<InputElementProps> = ({
  lable,
  type = "input",
  required,
  options,
}) => {
  return (
    <InputContainer>
      <Lable isRequired={required}>{lable}</Lable>
      {type === "input" ? (
        <Input {...options} />
      ) : (
        {
          /* <DropDownInput {...options} /> */
        }
      )}
    </InputContainer>
  )
}

export default InputElement
