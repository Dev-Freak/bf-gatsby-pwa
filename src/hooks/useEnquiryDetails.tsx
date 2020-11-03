import useStore from "./useStore"

type FormTypes = {
  fullName: string
  emailAddress: string
  phoneNumber: number
  authorize: true | false
}

const useEnquiryDetails = () => {
  const {
    state: {
      enquiryDetails: { urgency, notes, overdueCheck },
    },
    boundSetEnquiryDetailsValue,
  } = useStore()

  return {
    urgency,
    notes,
    overdueCheck,
    boundSetEnquiryDetailsValue,
  }
}

export default useEnquiryDetails
