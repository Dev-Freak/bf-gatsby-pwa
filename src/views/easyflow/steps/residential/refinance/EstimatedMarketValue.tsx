import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"
import useFirstRenderDisabledEffect from "../../../../../hooks/useFirstRenderDisabledEffect"

import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepWithBackButtonContainer from "../../../../../components/DynamicStepper/StepWithBackButtonContainer"

const EstimatedMarketValue: React.FC = () => {
  const {
    state: {
      easyFlow: { estimated_market_value },
    },
    boundSelectAndNext,
  } = useStore()

  const isFirstRender = useFirstRenderDisabledEffect()
  const [amount, setAmount] = React.useState(estimated_market_value ?? null)

  React.useEffect(() => {
    if (!isFirstRender && amount !== estimated_market_value)
      boundSelectAndNext({
        key: "estimated_market_value",
        value: amount,
      } as DataType)
  }, [amount])

  React.useEffect(() => {
    if (!isFirstRender && estimated_market_value !== amount)
      setAmount(estimated_market_value)
  }, [estimated_market_value])

  return (
    <StepWithBackButtonContainer>
      <StepHeader>
        <TitleWithTooltip title="Estimated Market Value">
          Norem ipsum...
        </TitleWithTooltip>
        <Description>
          What is the estimated market value of all the properties being refinanced?
        </Description>
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

export default EstimatedMarketValue
