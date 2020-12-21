import * as React from "react"

import Title from "../../../../components/Shared/Title"
import SummaryItem from "../../../../components/Shared/SummaryItem"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"

import useSummary from "../../../../hooks/useSummary"

const Summary: React.FC = () => {
  const summaryData = useSummary()

  const getEntireSummary = (data: any) => {
    return data.map((item: any, index: number) => (
      <SummaryItem key={`summaryItem-${index}`} {...item} />
    ))
  }

  return (
    <div className="flex w-6/12 flex-col space-y-6">
      <StepHeader>
        <Title>Summary</Title>
      </StepHeader>
      {getEntireSummary(summaryData)}
    </div>
  )
}

export default Summary
