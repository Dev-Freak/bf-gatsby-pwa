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
    <div className="flex flex-col flex-start">
      <StepHeader>
        <TitleWithTooltip title="Summary">Norem ipsum...</TitleWithTooltip>
      </StepHeader>
      <br />
      {getEntireSummary(summaryData)}
    </div>
  )
}

export default Summary
