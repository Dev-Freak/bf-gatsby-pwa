import * as React from "react"

export type LableProps = {
  isRequired?: true | false
}

const Lable: React.FC<LableProps> = ({ isRequired = false, children }) => {
  return (
    <div className="flex ">
      <p className="font-bold">{children}</p>
      {isRequired && <span className="font-bold">*</span>}
    </div>
  )
}

export default Lable
