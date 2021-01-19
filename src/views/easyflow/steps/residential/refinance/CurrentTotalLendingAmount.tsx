import * as React from "react"
import NumberFormat from "react-number-format"

import Input from "../../../../../components/Shared/Inputs/Input"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"

import useFocusInput from "../../../../../hooks/useFocusInput"
import useStore, { DataType } from "../../../../../hooks/useStore"

const CurrentTotalLendingAmount: React.FC = () => {
  const {
    state: {
      easyFlow: { current_total_lending_amount },
    },
    boundSelectTile,
  } = useStore()

  const inputRef = useFocusInput()
  const [amount, setAmount] = React.useState<string>(
    current_total_lending_amount ?? ""
  )

  const handleOnBlur = () =>
    amount !== "" &&
    boundSelectTile({
      keyName: "current_total_lending_amount",
      value: amount,
    } as DataType)

  return (
    <StepContainer back next={{ isDisabled: amount === "" }}>
      <StepHeader>
        <TitleWithTooltip title="Total Lending Amount">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>What is the Current Total Lending Amount?</Description>
      </StepHeader>

      <div className="flex items-center justify-center">
        <NumberFormat
          prefix="$"
          placeholder="$0"
          inputMode="numeric"
          decimalSeparator="."
          thousandSeparator=","
          value={amount}
          customInput={Input}
          getInputRef={inputRef}
          onChange={e => setAmount(e.target.value)}
          onBlur={handleOnBlur}
        />
      </div>
    </StepContainer>
  )
}

export default CurrentTotalLendingAmount
