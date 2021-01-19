import * as React from "react"
import NumberFormat from "react-number-format"

import Input from "../../../../../components/Shared/Inputs/Input"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"
import Alert from "../../../../../components/Shared/alert/Alert"

import useFocusInput from "../../../../../hooks/useFocusInput"
import useStore, { DataType } from "../../../../../hooks/useStore"

const CurrentRate: React.FC = () => {
  const {
    state: {
      easyFlow: { current_rate },
    },
    boundSelectTile,
  } = useStore()

  const inputRef = useFocusInput()
  const [amount, setAmount] = React.useState<string>(current_rate ?? "")
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  React.useEffect(() => {
    if (parseFloat(amount) > 2.19) setIsModalOpen(true)
    else setIsModalOpen(false)
  }, [amount])

  const isValidPercentage = (value: string) => {
    const numericValue = parseFloat(value)
    if (numericValue >= 0 && numericValue <= 100) return true

    return false
  }

  const handleOnChange = (value: string) => {
    if (isValidPercentage(value)) setAmount(value)
  }

  const handleFormat = (value: string) => {
    console.log(value)
    if (isValidPercentage(value)) return `${value}%`
    else return `${value.substring(0, 2)}%`
  }

  const handleOnBlur = () =>
    amount !== "" &&
    boundSelectTile({
      keyName: "current_rate",
      value: amount,
    } as DataType)

  return (
    <StepContainer back next={{ isDisabled: amount === "" }}>
      <StepHeader>
        <TitleWithTooltip title="Current Rate">Norem ipsum...</TitleWithTooltip>
        <Description>What is your current rate?</Description>
      </StepHeader>

      <div className="flex items-center justify-center">
        <NumberFormat
          suffix="%"
          placeholder="0%"
          inputMode="numeric"
          decimalSeparator="."
          value={amount}
          customInput={Input}
          getInputRef={inputRef}
          //format={handleFormat}
          //isNumericString={true}
          onChange={e => handleOnChange(e.target.value)}
          onBlur={handleOnBlur}
        />

        <Alert
          title="Congratulations!"
          content="We have identified a potential better rate option"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </StepContainer>
  )
}

export default CurrentRate
