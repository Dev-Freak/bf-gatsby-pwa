import * as React from "react"

import Title from "../../../../components/Shared/Title"
import SummaryItem from "../../../../components/Shared/SummaryItem"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import { POSSIBLE_APPLICANTS } from "../../../../utils/constants"

import useStore from "../../../../hooks/useStore"

const Summary: React.FC = () => {
  const {
    state: { easyFlow },
  } = useStore()

  const components = Object.keys(easyFlow).map(key => {
    const data = easyFlow[key]

    const formatArray = (value: Array<any>) => {
      if (key === "applicants") {
        let objFromArr: any = {}

        value.forEach((item: any, index: number) => {
          objFromArr[POSSIBLE_APPLICANTS[index]] = { ...item }
        })

        return objFromArr
      } else {
        return value.join(", ")
      }
    }

    const trueValue = Array.isArray(data) ? formatArray(data) : easyFlow[key]

    return {
      itemTitle: key,
      value: trueValue,
    }
  })

  return (
    <div className="flex flex-1 flex-col space-y-6">
      <StepHeader>
        <Title>Summary</Title>
      </StepHeader>
      {components.map((item: any, index: number) => (
        <SummaryItem key={`summaryItem-${index}`} {...item} />
      ))}
    </div>
  )
}

export default Summary
