import * as React from "react"

import { Check } from "@styled-icons/bootstrap"

export type CheckBoxProps = {
  checked?: true | false
  disabled?: true | false
  className?: string
  onClick?: CallableFunction
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  disabled,
  className,
  onClick,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked)
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  React.useEffect(() => {
    if (firstRender) {
      firstRender.current = false
      return
    }

    if (onClick) {
      onClick(isChecked)
    }
  }, [isChecked])

  const disabledStyle = disabled ? "border-disabled bg-gray-300" : "border-brand"
  const style = isChecked ? "bg-brand" : ""

  return (
    <div
      className={`${className} w-5 h-5 rounded-sm border-2 ${disabledStyle} ${style}`}
      onClick={() => setIsChecked(!isChecked)}
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

export default CheckBox
