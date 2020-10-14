import * as React from "react"

export type InputType = {
  type?: string
}

const Input: React.FC<InputType> = ({ type, ...rest }) => {
  return (
    <input
      className="border border-black p-3 font-sm"
      type={type ?? "text"}
      {...rest}
    />
  )
}

export default Input
