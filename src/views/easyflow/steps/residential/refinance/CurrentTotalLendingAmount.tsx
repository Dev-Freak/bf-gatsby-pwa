import * as React from "react"

import useStore, { DataType } from "../../../../../hooks/useStore"

import TitleWithTooltip from "../../../../../components/Shared/TitleWithTooltip"
import Description from "../../../../../components/Shared/Description"
import StepHeader from "../../../../../components/DynamicStepper/StepHeader"
import StepWithNextAndBackButtonContainer from "../../../../../components/DynamicStepper/StepWithNextAndBackButtonContainer"

import { formatCurrency } from "../../../../../utils/stringFormatter"

const CurrentTotalLendingAmount: React.FC = () => {
  const {
    state: {
      easyFlow: { current_total_lending_amount },
    },
    boundSelectTile,
  } = useStore()

  const [amount, setAmount] = React.useState(current_total_lending_amount ?? "")

  /*
    TODO:
    Use react-number-format to better display the amounts and its inputs: https://www.npmjs.com/package/react-number-format
  */
  return (
    <StepWithNextAndBackButtonContainer>
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
          onBlur={() =>
            boundSelectTile({
              keyName: "current_total_lending_amount",
              value: formatCurrency(amount),
            } as DataType)
          }
        />
      </div>
    </StepWithNextAndBackButtonContainer>
  )
}

export default CurrentTotalLendingAmount
