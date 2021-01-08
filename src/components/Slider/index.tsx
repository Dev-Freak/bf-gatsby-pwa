import * as React from "react"

import Node from "./Node"
import Label from "./Label"
import Connector from "./Connector"

import useFirstRenderDisabledEffect from "../../hooks/useFirstRenderDisabledEffect"

export type ValueType = number | string
export type Steps = Array<ValueType>
export type SliderProps = {
  steps: Steps
  defaultValue?: ValueType
  onChange: CallableFunction
  style?: any
}

const Slider: React.FC<SliderProps> = ({ steps, onChange, defaultValue, style }) => {
  const findDefaultStep = defaultValue && steps.find(s => s === defaultValue)
  const defaultValueIndex = findDefaultStep ? steps.indexOf(findDefaultStep) : null
  const stepsLength = steps.length

  const isFirstRender = useFirstRenderDisabledEffect()
  const [value, setValue] = React.useState(defaultValue)
  const [valueIndex, setValueIndex] = React.useState(defaultValueIndex)

  const handleChange = (value: number | string, index: number) => {
    setValue(value)
    setValueIndex(index)
  }

  React.useEffect(() => {
    if (!isFirstRender && onChange) {
      onChange(value)
    }
  }, [value])

  return (
    <div style={{ ...style }} className="flex flex-start w-full">
      {React.Children.map(steps, (item, index) => {
        const isNodeActive = valueIndex != null && index < valueIndex
        const isNodeSelected = item === value

        return (
          <div className="flex flex-1 items-center justify-start">
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => handleChange(item, index)}
            >
              <Node isActive={isNodeActive} isSelected={isNodeSelected} />
              <Label>{item}</Label>
            </div>
            {index + 1 < stepsLength && (
              <Connector isActive={isNodeActive && !isNodeSelected} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider
