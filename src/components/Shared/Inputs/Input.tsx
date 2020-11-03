import * as React from "react"

export type InputType = {
  ref: React.Ref<HTMLInputElement>
  name: string
  placeholder?: string
  onChange?: React.EventHandler<React.ChangeEvent>
  type?: string
}

const Input: React.FC<InputType> = React.forwardRef<HTMLInputElement, InputType>(
  ({ type, ...rest }, ref) => (
    <input
      className="input border border-black p-3 font-sm"
      type={type ?? "text"}
      ref={ref}
      {...rest}
    />
  )
)

export default Input
