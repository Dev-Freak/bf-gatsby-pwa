import * as React from "react"

const InputContainer: React.FC = ({ children }) => {
  return <div className="flex flex-col space-y-2 max-w-md">{children}</div>
}

export default InputContainer
