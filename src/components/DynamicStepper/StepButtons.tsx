import * as React from "react"

const StepButtons: React.FC = ({ children }) => {
  return (
    <div className="flex w-full self-center items-center justify-around max-w-m sm:w-10/12">
      {children}
    </div>
  )
}

export default StepButtons
