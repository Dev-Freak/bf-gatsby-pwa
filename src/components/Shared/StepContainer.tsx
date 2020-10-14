import * as React from "react"

const StepHeader: React.FC = ({ children }) => {
  return (
    <div className="max-w-4xl w-fit flex flex-col justify-center items-center space-y-10">
      {children}
    </div>
  )
}

export default StepHeader
