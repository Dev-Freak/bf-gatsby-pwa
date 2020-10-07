import * as React from "react"

export interface MainItemProps {}

const MainItem: React.FC<MainItemProps> = ({ children }) => {
  return (
    <div className={`relative flex flex-col items-center justify-start md:flex-row`}>
      {children}
    </div>
  )
}

export default MainItem
