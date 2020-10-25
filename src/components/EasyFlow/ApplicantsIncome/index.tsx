import * as React from "react"

import IncomeType from "./IncomeType"
import EmploymentType from "./EmploymentType"
import SelfEmploymentType from "./SelfEmploymentType"

type ApplicantsIncomeProps = {
  index: number
  section: 0 | 1
  incomeValue: string
}

const ApplicantsIncome: React.FC<ApplicantsIncomeProps> = ({
  index,
  section,
  incomeValue,
}) => {
  const validate = (value, prop) => {
    if (value && value?.length !== 0) {
      for (let item of value) {
        if (item.includes(prop)) return true
      }
    }

    return false
  }

  const renderEmployment = validate(incomeValue, "PAYG")
  const renderSelfEmployment = validate(incomeValue, "Self")

  return (
    <React.Fragment>
      {section === 0 ? (
        <IncomeType keyName={`applicants[${index}]`} />
      ) : (
        <React.Fragment>
          {renderEmployment && <EmploymentType keyName={`applicants[${index}]`} />}
          {renderSelfEmployment && (
            <SelfEmploymentType keyName={`applicants[${index}]`} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ApplicantsIncome
