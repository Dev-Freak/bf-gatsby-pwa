import * as React from "react"

const BarConnector: React.FC = () => {
  return (
    <div className="flex w-32 h-64 max-h-connector items-center justify-center flex-grow md:w-1">
      <span className="block bg-brandIdleLight w-full h-1 md:w-connector md:h-full" />
    </div>
  )
}

export default BarConnector
