import * as React from "react"
import NumberFormat from "react-number-format"

import Input from "../../../../../components/Shared/Inputs/Input"
import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepContainer from "../../../../../components/DynamicStepper/StepContainer"

import useFocusInput from "../../../../../hooks/useFocusInput"
import useStore, { DataType } from "../../../../../hooks/useStore"

const EstimatedMarketValue: React.FC = () => {
  const {
    state: {
      easyFlow: { estimated_market_value },
    },
    boundSelectTile,
  } = useStore()

  const inputRef = useFocusInput()
  const [amount, setAmount] = React.useState<string>(estimated_market_value ?? "")

  const handleOnBlur = () =>
    amount !== "" &&
    boundSelectTile({
      keyName: "estimated_market_value",
      value: amount,
    } as DataType)

  return (
    <StepContainer back next={{ isDisabled: amount === "" }}>
      <StepHeader>
        <TitleWithTooltip title="Estimated Market Value">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          What is the estimated market value of all the properties being refinanced?
        </Description>
      </StepHeader>

      <div className="flex items-center justify-center">
        <NumberFormat
          prefix={"$"}
          value={amount}
          customInput={Input}
          inputMode="numeric"
          getInputRef={inputRef}
          thousandSeparator={"."}
          decimalSeparator={","}
          onChange={e => setAmount(e.target.value)}
          onBlur={handleOnBlur}
        />
      </div>
    </StepContainer>
  )
}

export default EstimatedMarketValue
