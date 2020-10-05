import * as React from "react"

import { InfoCircle } from "@styled-icons/bootstrap/"

export interface TooltipProps {}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return (
    <div className="absolute mx-2 w-4 h-4 group hover:w-10/12">
      <span className="flex w-4 h-4 items-center">
        <InfoCircle className="w-full h-full" />
      </span>
      <div className="invisible absolute opacity-0 top-0 left-0 mt-6 p-4 w-11/12 md:w-5/12 lg:w-3/12 bg-brand rounded-lg shadow-xl transition duration-1000 ease-in-out transform group-hover:visible group-hover:opacity-100">
        <p className="text-justify text-white">{children}</p>
      </div>
    </div>
  )
}

export default Tooltip
