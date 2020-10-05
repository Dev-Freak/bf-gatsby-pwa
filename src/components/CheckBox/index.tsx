import * as React from "react"
import PropTypes from "prop-types"

import { Check } from "@styled-icons/bootstrap"

export interface CheckBoxProps {
  checked?: true | false
  disabled?: true | false
  className?: string
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, disabled, className }) => {
  const disabledStyle = disabled ? "border-disabled bg-gray-300" : "border-brand"
  const style = checked ? "bg-brand" : ""

  return (
    <div
      className={`${className} w-5 h-5 rounded-sm border-2 ${disabledStyle} ${style}`}
    >
      <span className="flex items-center justify-center max-w-full max-h-full ">
        {checked && (
          <Check
            style={{ transform: "scale(1.4)" }}
            className="relative text-white w-full h-full"
          />
        )}
      </span>
    </div>
  )
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  className: "",
}

export default CheckBox
