import { useForm } from "react-hook-form"
import useStore from "./useStore"

type FormTypes = {
  fullName: string
  emailAddress: string
  phoneNumber: number
}

const useContactForm = () => {
  const {
    state: {
      contactInfo: { fullName, emailAddress, phoneNumber },
    },
    boundSetContactValue,
  } = useStore()

  const { register, handleSubmit, errors, formState } = useForm<FormTypes>({
    mode: "onBlur",
    defaultValues: { fullName, emailAddress, phoneNumber },
  })

  return {
    inputs: { fullName, emailAddress, phoneNumber },
    form: { register, handleSubmit, errors, formState },
    boundSetContactValue,
  }
}

export default useContactForm
