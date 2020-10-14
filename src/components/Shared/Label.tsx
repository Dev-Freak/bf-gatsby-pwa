import * as React from "react"

export interface LabelProps {
  isRequired?: boolean
}

const Label: React.FC<LabelProps> = ({ isRequired = false, children }) => {
  return (
    <div className="flex ">
      <p className="font-bold">{children}</p>
      {isRequired && <span className="ml-1 font-bold">*</span>}
    </div>
  )
}

export default Label
