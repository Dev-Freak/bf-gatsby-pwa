import * as React from "react"
import PropTypes from "prop-types"

export interface TabHeaderProps {
  children: string
  isActive?: true | false
}

const TabHeader: React.FC<TabHeaderProps> = ({
  children,
  isActive,
}: TabHeaderProps) => {
  const styles = isActive ? "text-brand border-b-2 border-idle" : "text-unselected"

  return (
    <div className="w-auto">
      <h5 className={`w-fit py-1 px-2 font-bold text-base ${styles}`}>{children}</h5>
    </div>
  )
}

TabHeader.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

TabHeader.defaultProps = {
  isActive: false,
}

export default TabHeader
