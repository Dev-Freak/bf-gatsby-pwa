import * as React from "react"
import _ from "lodash"

import useStore from "../useStore"

import ApplicantsIncome from "../../views/easyflow/steps/residential/applicantsIncome/index"
import { TabProps } from "../../components/Tab/Tabs"

import { POSSIBLE_APPLICANTS } from "../../utils/constants"

const useApplicanstIncomeTabs = () => {
  const { state, boundSetTab, boundSetInnerStep } = useStore()
  const { applicants } = state?.easyFlow
  const { activeTab, section } = state?.tabs

  const isSectionsValid = () => {
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
    let isDisabled = false

    const income = applicants[activeTab]?.income_type
    if (income === null || income === undefined || income.length === 0) {
      isDisabled = true
    } else if (
      income.length === 1 &&
      (income[0].includes("Pension") || income[0].includes("Contract"))
    ) {
      isDisabled = true
    } else if (section === 1 && !isSectionsValid()) {
      isDisabled = true
    }

    return isDisabled
  }

  const canStepBack = section === 0
  const canStepNext = section === 1 && isSectionsValid()
  const isNextStepDisabled = isNextButtonDisabled() && !isSectionsValid()

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
