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
      contactInfo: { fullName, emailAddress, phoneNumber, authorize },
    },
    boundFinishEasyFlow,
  } = useStore()

  const { urgency, notes, overdueCheck } = enquiryDetails

  const isSummaryFinished = () => {
    if (!fullName || !emailAddress || !phoneNumber || !authorize || !urgency)
      return false

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

    const response = await fetch("/server", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(json => json.data)

    console.log(response)

    boundFinishEasyFlow()
  }

  return {
    isSummaryFinished: isSummaryFinished(),
    finishEasyFlow,
  }
}

export default useApplicationSummary
