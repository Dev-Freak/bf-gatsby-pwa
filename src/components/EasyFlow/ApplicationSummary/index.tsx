import * as React from "react"

import Summary from "./Summary"
import ContactForm from "./ContactForm"
import EnquiryDetails from "./EnquiryDetails"

import StepButtons from "../../DynamicStepper/StepButtons"
import StepContainer from "../../DynamicStepper/StepContainer"

import { PrimaryButton } from "../../Buttons"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

import BackButton from "../../DynamicStepper/BackButton"

import useApplicationSummary from "../../../hooks/useApplicationSummary"

const ApplicationSummary: React.FC = () => {
  const { isSummaryFinished, finishEasyFlow } = useApplicationSummary()

  return (
    <StepContainer>
      <div className="flex flex-col flex-no-wrap space-y-10 w-full lg:flex-row lg:flex-wrap">
        <div className="flex flex-col lg:flex-row items-start justify-center space-x-5 w-full">
          <Summary />
          <ContactForm />
        </div>

        <div className="flex items-center justify-center">
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
