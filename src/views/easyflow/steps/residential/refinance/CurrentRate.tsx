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
          suffix={"%"}
          value={amount}
          customInput={Input}
          inputMode="numeric"
          getInputRef={inputRef}
          onChange={e => setAmount(e.target.value)}
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
