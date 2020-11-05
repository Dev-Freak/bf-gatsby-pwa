import * as React from "react"

const StepperContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col m-auto justify-center items-center space-y-10 w-11-12 md:w-8/12 lg:w-10/12">
      {children}
    </div>
  )
}

export default StepperContainer
