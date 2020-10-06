import * as React from "react"

export interface MainLabelProps {
  children: string
}

const MainLabel: React.FC<MainLabelProps> = ({ children }) => {
  return (
    <span className="flex items-center justify-center px-4 py-2">
      <p className="m-0 text-white text-sm font-bold">{children}</p>
    </span>
  )
}

export default MainLabel
