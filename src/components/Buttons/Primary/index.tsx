import * as React from "react"
import PropTypes from "prop-types"

export type PrimaryProps = {
  label: string
  isDisabled?: boolean
  className?: string
  onClick: CallableFunction
}

const Primary: React.FC<PrimaryProps> = ({
  label,
  className,
  children,
  isDisabled,
  onClick,
}) => {
  const buttonStyle = isDisabled
    ? "text-disabled border-disabled cursor-not-allowed"
    : "bg-idle text-white"
  const iconStyle = isDisabled ? "text-disabled" : "text-white"

  return (
    <button
      className={`flex items-center justify-center space-x-2 space-around py-2 px-7 rounded-full border active:border-0 ${className} ${buttonStyle}`}
      onClick={() => (isDisabled ? null : onClick())}
    >
      <p className={`font-bold`}>{label}</p>
      {React.Children.only(
        React.cloneElement(children as React.ReactElement, {
          className: `w-6 h-6 transform scale-125 ${iconStyle}`,
        })
      )}
    </button>
  )
}

Primary.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
}

Primary.defaultProps = {
  isDisabled: false,
  className: "",
}

export default Primary
