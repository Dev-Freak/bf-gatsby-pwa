import * as React from "react"

const DropDownInput: React.FC = ({ children, ...rest }) => {
  return (
    <select {...rest} className="border border-black p-3 font-sm">
      {children}
    </select>
  )
}

export default DropDownInput
