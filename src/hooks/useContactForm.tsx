import { useForm } from "react-hook-form"
import useStore from "./useStore"

type FormTypes = {
  fullName: string
  emailAddress: string
  phoneNumber: number
  authorize: true | false
}

const useContactForm = () => {
  const {
    state: {
      contactInfo: { fullName, emailAddress, phoneNumber, authorize },
    },
    boundSetContactValue,
  } = useStore()

  const { register, handleSubmit, errors, formState } = useForm<FormTypes>({
    mode: "onBlur",
    defaultValues: { fullName, emailAddress, phoneNumber, authorize },
  })

  return {
    inputs: { fullName, emailAddress, phoneNumber, authorize },
    form: { register, handleSubmit, errors, formState },
    boundSetContactValue,
  }
}

export default useContactForm
