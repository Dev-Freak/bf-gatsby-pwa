import * as React from "react"
import _ from "lodash"

import useStore from "../useStore"

import ApplicantsIncome from "../../views/easyflow/steps/residential/applicantsIncome/index"
import { TabProps } from "../../components/Tab/Tabs"

import { POSSIBLE_APPLICANTS } from "../../utils/constants"

import { PostMessageContext } from "../../components/AppFlow"

const useApplicanstIncomeTabs = () => {
  const { state, boundSetTab, boundSetInnerStep } = useStore()
  const { sendMessage } = React.useContext(PostMessageContext)
  const { applicants } = state?.easyFlow
  const { activeTab, section } = state?.tabs

  const areSectionsValid = () => {
    let isValid = true

    for (const applicant of applicants) {
      const income = _.get(applicant, "income_type", false)
      const employment = _.get(applicant, "employment_type", false)
      const selfEmployment = _.get(applicant, "self_employment_type", false)

      if (income?.length > 0) {
        if (income.some((item: any) => item.includes("PAYG")) && !employment)
          return false
        if (income.some((item: any) => item.includes("Self")) && !selfEmployment)
          return false
      } else {
        isValid = false
      }

      if (!isValid) {
        return isValid
      }
    }

    return isValid
  }

  const tabs = applicants?.map(
    (applicant: any, index: number) =>
      ({
        label: POSSIBLE_APPLICANTS[index],
        step: (
          <ApplicantsIncome
            index={index}
            section={section}
            incomeValue={applicant?.income_type}
          />
        ),
      } as TabProps)
  )

  const isNextButtonDisabled = () => {
    const income = applicants[activeTab]?.income_type
    if (income === null || income === undefined || income.length === 0) {
      return true
    } else if (
      income.length === 1 &&
      (income[0].includes("Pension") || income[0].includes("Contract"))
    ) {
      return true
    } else if (section === 1 && !areSectionsValid()) {
      return true
    }

    return false
  }

  const extendMessage = () => {
    const containerRef = document.getElementById("step-container")

    sendMessage({
      height: containerRef?.offsetHeight,
      width: containerRef?.offsetWidth,
    })
  }

  React.useEffect(() => {
    extendMessage()
  }, [activeTab, section])

  const canStepBack = section === 0
  const canStepNext = section === 1 && areSectionsValid()
  const isNextStepDisabled = isNextButtonDisabled() && !areSectionsValid()

  return {
    tabs,
    activeTab,
    canStepBack,
    canStepNext,
    isNextStepDisabled,
    boundSetTab,
    boundSetInnerStep,
  }
}

export default useApplicanstIncomeTabs
