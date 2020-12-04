import * as React from "react"

import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import SummaryItem from "../../../../components/Shared/SummaryItem"
import TitleWithTooltip from "../../../../components/Shared/TitleWithTooltip"

import useSummary from "../../../../hooks/useSummary"

const Summary: React.FC = () => {
  const summaryData = useSummary()

  const getEntireSummary = (data: any) => {
    return data.map((item: any, index: number) => (
      <SummaryItem key={`summaryItem-${index}`} {...item} />
    ))
  }

  return (
    <div className="flex flex-1 flex-col space-y-6">
      <StepHeader>
        <TitleWithTooltip title="Summary">Norem ipsum...</TitleWithTooltip>
      </StepHeader>
      {getEntireSummary(summaryData)}
    </div>
  )
}

export default Summary
