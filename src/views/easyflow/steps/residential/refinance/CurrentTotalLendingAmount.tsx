import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"
import useFirstRenderDisabledEffect from "../../../../../hooks/useFirstRenderDisabledEffect"

import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../../components/DynamicStepper/StepWithBackButtonContainer"

const CurrentTotalLendingAmount: React.FC = () => {
  const {
    state: {
      easyFlow: { current_total_lending_amount },
    },
    boundSelectAndNext,
  } = useStore()

  const isFirstRender = useFirstRenderDisabledEffect()
  const [amount, setAmount] = React.useState(current_total_lending_amount ?? null)

  React.useEffect(() => {
    if (!isFirstRender && amount !== current_total_lending_amount)
      boundSelectAndNext({
        key: "current_total_lending_amount",
        value: amount,
      } as DataType)
  }, [amount])

  React.useEffect(() => {
    if (!isFirstRender && current_total_lending_amount !== amount)
      setAmount(current_total_lending_amount)
  }, [current_total_lending_amount])

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Total Lending Amount">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>What is the Current Total Lending Amount?</Description>
      </StepHeader>

      <div className="flex items-center justify-center">
        <input
          type="number"
          min="0.00"
          max="1000000.00"
          step="0.01"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
    </StepWithBackButtonContainer>
  )
}

export default CurrentTotalLendingAmount
