import * as React from "react"

export interface MainLabelProps {
  children: string
}

const MainLabel: React.FC<MainLabelProps> = ({ children }) => {
  return (
    <span className="absolute flex items-center justify-center top-nodeTop left-0 md:top-0 md:left-nodeLeft">
      <p className="m-0 text-white text-sm font-bold">{children}</p>
    </span>
  )
}

export default MainLabel
