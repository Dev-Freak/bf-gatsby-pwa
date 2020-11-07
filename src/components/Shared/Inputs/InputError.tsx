import * as React from "react"

export interface InputErrorProps {
  children: string | undefined
}

const InputError: React.FC<InputErrorProps> = ({ children }) => {
  return <p className="text-sm text-red-500">{children}</p>
}

export default InputError
