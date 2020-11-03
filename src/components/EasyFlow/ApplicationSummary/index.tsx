import * as React from "react"

import Summary from "./Summary"
import ContactForm from "./ContactForm"
import EnquiryDetails from "./EnquiryDetails"

import StepButtons from "../../DynamicStepper/StepButtons"
import StepContainer from "../../DynamicStepper/StepContainer"

import PrimaryButton from "../../Buttons/Primary"
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort"

import BackButton from "../../DynamicStepper/BackButton"

import useApplicationSummary from "../../../hooks/useApplicationSummary"

const ApplicationSummary: React.FC = () => {
  const { isSummaryFinished, finishEasyFlow } = useApplicationSummary()

  return (
    <StepContainer>
      <div className="flex flex-col flex-no-wrap lg:flex-row lg:flex-wrap">
        <Summary />
        <ContactForm />
        <EnquiryDetails />
      </div>

      <StepButtons>
        <PrimaryButton
          label="Proceed to finish"
          onClick={() => finishEasyFlow()}
          isDisabled={!isSummaryFinished}
        >
          <ArrowRightShort />
        </PrimaryButton>

        <BackButton />
      </StepButtons>
    </StepContainer>
  )
}

export default ApplicationSummary
