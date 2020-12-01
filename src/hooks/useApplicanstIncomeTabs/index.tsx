import * as React from "react"
import _ from "lodash"

import useStore from "../useStore"

import ApplicantsIncome from "../../views/easyflow/steps/residential/applicantsIncome/index"
import { TabProps } from "../../components/Tab/Tabs"

import { POSSIBLE_APPLICANTS } from "../../utils/constants"

const useApplicanstIncomeTabs = () => {
  const { state, boundSetInnerStep } = useStore()
  const { applicants } = state?.easyFlow
  const { activeTab, section } = state?.tabs

  const isSectionsValid = () => {
    let isValid = true

    for (const applicant of applicants) {
      const income = _.get(applicant, "income_type", false)
      const employment = _.get(applicant, "employment_type", false)
      const selfEmployment = _.get(applicant, "self_employment_type", false)

      if (income.length > 0) {
        if (income.find(i => i.includes("PAYG"))) isValid = employment ? true : false
        if (income.find(i => i.includes("Self")))
          isValid = selfEmployment ? true : false
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
    (applicant, index) =>
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
    } else if (income.length === 1 && income[0].includes("Pension")) {
      isDisabled = true
    } else if (section === 1 && !isSectionsValid()) {
      isDisabled = true
    }

    return isDisabled
  }

  const canStepBack = section === 0
  const canStepNext = isSectionsValid()
  const isNextStepDisabled = isNextButtonDisabled() && !isSectionsValid()

  return { tabs, canStepBack, canStepNext, isNextStepDisabled, boundSetInnerStep }
}

export default useApplicanstIncomeTabs
