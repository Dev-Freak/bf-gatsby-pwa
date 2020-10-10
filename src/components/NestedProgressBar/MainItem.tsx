import * as React from "react"

import MainNode from "./MainNode"
import MainLabel from "./MainLabel"

export interface MainItemProps {
  title: string
  isActive: true | false
  isCompleted: true | false
}

const MainItem: React.FC<MainItemProps> = ({ title, isActive, isCompleted }) => {
  return (
    <div className={`relative flex flex-col items-center justify-start md:flex-row`}>
      <MainNode isActive={isActive} isCompleted={isCompleted} />
      <MainLabel>{title}</MainLabel>
    </div>
  )
}

export default MainItem
