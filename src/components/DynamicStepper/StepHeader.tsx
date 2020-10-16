import * as React from "react"

const StepHeader: React.FC = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start space-y-2">
      {children}
    </div>
  )
}

export default StepHeader
