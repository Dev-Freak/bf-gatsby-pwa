import * as React from "react"

import StepHeader from "../../DynamicStepper/StepHeader"
import SummaryItem from "../../Shared/SummaryItem"
import TitleWithTooltip from "../../Shared/TitleWithTooltip"

import useSummary from "../../../hooks/useSummary"

const Summary: React.FC = () => {
  const summaryData = useSummary()

  const getEntireSummary = data => {
    return data.map(item => <SummaryItem {...item} />)
  }

  return (
    <div className="flex flex-col space-y-6">
      <StepHeader>
        <TitleWithTooltip title="Summary">Norem ipsum...</TitleWithTooltip>
      </StepHeader>
      {getEntireSummary(summaryData)}
    </div>
  )
}

export default Summary
