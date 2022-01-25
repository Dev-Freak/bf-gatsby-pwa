import * as React from "react"

import { InfoCircle } from "@styled-icons/bootstrap/"

export type TooltipProps = {
  children: string
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute mx-2 w-4 h-4 group">
        <span className="flex w-4 h-4 items-center">
          <InfoCircle className="w-full h-full" />
        </span>

        {/* 
          TODO:
            - useDeviceScreenSize: Create hook for getting { width, height } of screen and accounting for resizing
            - useResponsiveTooltip: Create hook that composes from the useDeviceScreenSize to define what is the best position a tooltip should be rendered

            - Use the previous hooks to determine the css for the width of the hideable component as well as the position to render it
         */}

        <div className="invisible absolute opacity-0 top-0 left-0 mt-0 p-4 w-auto bg-brand rounded-lg shadow-xl transition duration-1000 ease-in-out transform group-hover:visible group-hover:opacity-100">
          <p className="text-center text-white">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
