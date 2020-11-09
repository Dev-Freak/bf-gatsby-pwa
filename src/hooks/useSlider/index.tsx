import * as React from "react"

import { SliderProps } from "../../components/Slider"
import Node from "../../components/Slider/Node"
import Label from "../../components/Slider/Label"
import Connector from "../../components/Slider/Connector"

const useSlider = ({
  steps,
  onChange,
  onIndexChange,
  defaultValue,
}: SliderProps) => {
  const findDefaultStep = defaultValue && steps.find(s => s.value === defaultValue)
  const defaultValueIndex = findDefaultStep ? steps.indexOf(findDefaultStep) : null

  const [value, setValue] = React.useState(defaultValue)
  const [valueIndex, setValueIndex] = React.useState(defaultValueIndex)

  const handleChange = (value: number | string, index: number) => {
    setValue(value)
    setValueIndex(index)
  }

  React.useEffect(() => {
    if (onChange) onChange(value)
    if (onIndexChange) onIndexChange(valueIndex)
  }, [value, valueIndex])

  const getNodes = () => {
    const stepsLength = steps.length

    return steps.map((item, index) => {
      const isNodeActive = valueIndex != null && index < valueIndex
      const isNodeSelected = item.value === value

      return (
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center justify-center">
            <Node
              isActive={isNodeActive}
              isSelected={isNodeSelected}
              onClick={() => handleChange(item.value, index)}
            />
            <Label>{item.label}</Label>
          </div>
          {index + 1 < stepsLength && (
            <Connector isActive={isNodeActive && !isNodeSelected} />
          )}
        </div>
      )
    })
  }

  return { nodes: getNodes() }
}

export default useSlider
