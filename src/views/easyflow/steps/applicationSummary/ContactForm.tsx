import * as React from "react"
import { FieldError, useForm } from "react-hook-form"

import Title from "../../../../components/Shared/Title"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import InputContainer from "../../../../components/Shared/Inputs/InputContainer"
import Lable from "../../../../components/Shared/Inputs/Lable"
import Input from "../../../../components/Shared/Inputs/Input"
import InputError from "../../../../components/Shared/Inputs/InputError"
import CustomSlider from "../../../../components/Slider/CustomSlider"

type Props = {
  stateProps: {
    fullName: string
    emailAddress: string
    phoneNumber: string
    urgency: string
  }
  methods: {
    onValid: CallableFunction
    setContactValue: CallableFunction
    setEnquiryDetailsValue: CallableFunction
  }
}

type FormTypes = {
  fullName: string
  emailAddress: string
  phoneNumber: string
}

const ContactForm: React.FC<Props> = ({ stateProps, methods }) => {
  const { fullName, emailAddress, phoneNumber, urgency } = stateProps
  const { onValid, setContactValue, setEnquiryDetailsValue } = methods

  const [fullNameState, setFullName] = React.useState(fullName ?? "")
  const [emailAddressState, setEmailAddress] = React.useState(emailAddress ?? "")
  const [phoneNumberState, setPhoneNumber] = React.useState(phoneNumber ?? "")
  const urgencyFormatted = parseInt(urgency?.split(" ")[0])

  const { register, errors, formState } = useForm<FormTypes>({
    mode: "onChange",
    defaultValues: { fullName, emailAddress, phoneNumber },
  })

  const handleChange = (
    keyName: string,
    value: string,
    error: FieldError | undefined
  ) => {
    if (!error) {
      setContactValue({
        keyName,
        value,
      })
    }
  }

  const handleUrgencyChange = (e: ReadonlyArray<Number>) => {
    const urgency = e[0]
    setEnquiryDetailsValue({
      keyName: "urgency",
      value: `${urgency} days`,
    })
  }

  React.useEffect(() => {
    onValid(formState.isValid)
  }, [formState.isValid])

  return (
    <form className="flex flex-col justify-center space-y-6 w-full">
      <StepHeader>
        <Title>Fill The Form</Title>
      </StepHeader>

      <InputContainer>
        <Lable isRequired={true}>Full name</Lable>
        <Input
          {...{
            ref: register({
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /(^[A-Za-z]{3,16})([ ]{1})([A-Za-z]{3,16})/i,
                message: "Please use valid firstname and lastname only",
              },
            }),
            name: "fullName",
            placeholder: "Enter full name",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value),
            onBlur: () => handleChange("fullName", fullNameState, errors.fullName),
          }}
        />

        {errors.fullName && <InputError>{errors.fullName?.message}</InputError>}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Email address</Lable>
        <Input
          {...{
            ref: register({
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                message: "Please use a valid email address",
              },
            }),
            type: "email",
            name: "emailAddress",
            placeholder: "Enter your email",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailAddress(e.target.value),
            onBlur: () =>
              handleChange("emailAddress", emailAddressState, errors.emailAddress),
          }}
        />

        {errors.emailAddress && (
          <InputError>{errors.emailAddress?.message}</InputError>
        )}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Phone number</Lable>
        <Input
          {...{
            ref: register({
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[0-9]{10}$/i,
                message: "Please use a valid phone number",
              },
            }),
            type: "phone",
            name: "phoneNumber",
            placeholder: "Enter your phone",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value),
            onBlur: () =>
              handleChange("phoneNumber", phoneNumberState, errors.phoneNumber),
          }}
        />

        {errors.phoneNumber && (
          <InputError>{errors.phoneNumber?.message}</InputError>
        )}
      </InputContainer>

      <div className="flex flex-col my-10 space-y-5 max-w-lg w-full">
        <Lable isRequired={true}>Urgency of finance (In Days)</Lable>
        <div className="flex max-w-lg m-full">
          <CustomSlider
            defaultValue={isNaN(urgencyFormatted) ? undefined : urgencyFormatted}
            onSliderChange={(values: ReadonlyArray<number>) =>
              handleUrgencyChange(values)
            }
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
