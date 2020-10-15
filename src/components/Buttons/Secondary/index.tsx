import * as React from "react"
import PropTypes from "prop-types"

export interface SecondaryProps {
  label: string
  className?: string
  onClick: VoidFunction
}

const Secondary: React.FC<SecondaryProps> = ({
  label,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center space-x-2 space-around py-2 px-7 ${className}`}
      onClick={onClick}
    >
      {React.Children.only(
        React.cloneElement(children as React.ReactElement, {
          className: "w-6 h-6 transform scale-125 text-idle",
        })
      )}
      <p className="font-bold text-idle">{label}</p>
    </button>
  )
}

Secondary.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Secondary.defaultProps = {
  className: "",
}

export default Secondary
