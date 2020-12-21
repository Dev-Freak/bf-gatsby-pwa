import * as React from "react"

const StepHeader: React.FC = ({ children }) => {
  return (
    <div className="max-w-lg flex flex-col justify-center items-start">
      {children}
    </div>
  )
}

export default StepHeader
