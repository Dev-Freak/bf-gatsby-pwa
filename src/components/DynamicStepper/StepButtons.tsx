import * as React from "react"

const StepButtons: React.FC = ({ children }) => {
  return (
    <div className="flex w-10/12 self-center items-center justify-around">
      {children}
    </div>
  )
}

export default StepButtons
