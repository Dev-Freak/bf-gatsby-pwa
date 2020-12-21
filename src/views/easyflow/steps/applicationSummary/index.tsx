import * as React from "react"

import Summary from "./Summary"
import ContactForm from "./ContactForm"
import EnquiryDetails from "./EnquiryDetails"

import StepButtons from "../../../../components/DynamicStepper/StepButtons"
import StepContainer from "../../../../components/DynamicStepper/StepContainer"
import { PrimaryButton } from "../../../../components/Buttons"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"
import BackButton from "../../../../components/DynamicStepper/BackButton"

import useApplicationSummary from "../../../../hooks/useApplicationSummary"

const ApplicationSummary: React.FC = () => {
  const { path, isSummaryFinished, finishEasyFlow } = useApplicationSummary()

  return (
    <StepContainer>
      <div className="flex flex-col flex-no-wrap space-y-10 w-full lg:flex-row lg:flex-wrap justify-center">
        <div className="flex flex-col lg:flex-row items-start justify-center space-x-5 w-full">
          {path && path !== "Other_Financial_Enquiries" && <Summary />}
          <ContactForm />
        </div>

        <div className="flex items-center justify-center w-full">
          <EnquiryDetails />
        </div>
      </div>

      <StepButtons>
        <BackButton />

        <PrimaryButton
          label="Proceed to finish"
          onClick={() => finishEasyFlow()}
          isDisabled={!isSummaryFinished}
        >
          <ArrowRightShort />
        </PrimaryButton>
      </StepButtons>
    </StepContainer>
  )
}

export default ApplicationSummary
