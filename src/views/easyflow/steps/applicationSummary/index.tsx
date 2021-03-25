import * as React from "react"

import Summary from "./Summary"
import ContactForm from "./ContactForm"
import EnquiryDetails from "./EnquiryDetails"

import StepContainer from "../../../../components/DynamicStepper/StepContainer"

import { fetchAPI } from "../../../../utils/fetchUtils"

import useStore from "../../../../hooks/useStore"

type BodyType = {
  firstName: string
  familyName: string
  email: string
  primaryCode: string
  primary: string
  description: object
}

const ApplicationSummary: React.FC = () => {
  const {
    state: {
      easyFlow,
      enquiryDetails,
      contactInfo: { fullName, emailAddress, phoneNumber },
    },
    boundSetContactValue,
    boundSetEnquiryDetailsValue,
    boundFinishEasyFlow,
  } = useStore()

  const [isPostingData, setIsPostingData] = React.useState(false)
  const [isFormValid, setIsFormValid] = React.useState(false)
  const { urgency } = enquiryDetails
  const { path } = easyFlow

  const getBodyData = () => {
    return {
      idWorkflow: "016c389f-d3a3-45a6-937b-aae5d36c555d",
      firstName: fullName.split(" ")[0],
      familyName: fullName.split(" ")[1],
      email: emailAddress,
      primary: phoneNumber,
      primaryCode: "+61",
      description: {
        ...easyFlow,
        ...enquiryDetails,
      },
    } as BodyType
  }

  const finishEasyFlow = async () => {
    setIsPostingData(true)

    const data = getBodyData()

    await fetchAPI("server", data)
      .then(() => setIsPostingData(false))
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        boundFinishEasyFlow()
      })
  }

  return (
    <StepContainer
      back
      next={{
        label: "Finish",
        onClick: finishEasyFlow,
        isDisabled: !(isFormValid && urgency),
      }}
    >
      <div
        className={`flex flex-col w-full max-w-3xl sm:flex-row ${
          isPostingData ? "opacity-50" : "opacity-100"
        }`}
      >
        {isPostingData && (
          <div className="absolute top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        {path && path !== "Other_Financial_Enquiries" && <Summary />}
        <div className="flex flex-1 flex-col items-center justify-center w-full space-y-10">
          <ContactForm
            stateProps={{ fullName, emailAddress, phoneNumber, urgency }}
            methods={{
              onValid: setIsFormValid,
              setContactValue: boundSetContactValue,
              setEnquiryDetailsValue: boundSetEnquiryDetailsValue,
            }}
          />
          <EnquiryDetails />
        </div>
      </div>
    </StepContainer>
  )
}

export default ApplicationSummary
