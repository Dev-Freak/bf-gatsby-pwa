import useStore from "./useStore"

type BodyType = {
  firstName: string
  familyName: string
  email: string
  primaryCode: string
  primary: string
  description: object
}

const useApplicationSummary = () => {
  const {
    state: {
      easyFlow,
      enquiryDetails,
      contactInfo: { fullName, emailAddress, phoneNumber },
    },
    boundFinishEasyFlow,
  } = useStore()

  const { urgency } = enquiryDetails

  const HOST = window.location.origin

  const isSummaryFinished = () => {
    if (!fullName || !emailAddress || !phoneNumber || !urgency) return false

    return true
  }

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
    const data = getBodyData()

    //console.log(JSON.stringify(data))

    const response = await fetch(`${HOST}/.netlify/functions/server`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => data)

    //console.log(response)

    boundFinishEasyFlow()
  }

  return {
    path: easyFlow?.path,
    isSummaryFinished: isSummaryFinished(),
    finishEasyFlow,
  }
}

export default useApplicationSummary
