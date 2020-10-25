import * as React from "react"

const StepButtons: React.FC = ({ children }) => {
  return <div className="flex w-8/12 items-center justify-around">{children}</div>
}

export default StepButtons
