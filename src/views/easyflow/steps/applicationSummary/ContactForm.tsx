import * as React from "react"
import { useForm } from "react-hook-form"

import Title from "../../../../components/Shared/Title"
import StepHeader from "../../../../components/DynamicStepper/StepHeader"
import InputContainer from "../../../../components/Shared/Inputs/InputContainer"
import Lable from "../../../../components/Shared/Inputs/Lable"
import Input from "../../../../components/Shared/Inputs/Input"
import InputError from "../../../../components/Shared/Inputs/InputError"
import Slider, { Steps, ValueType } from "../../../../components/Slider"

import useStore from "../../../../hooks/useStore"

type FormTypes = {
  fullName: string
  emailAddress: string
  phoneNumber: number
}

const steps = ["7", "14", "21", "28", "35", "42", "49", "56", "60+"] as Steps

const ContactForm: React.FC = () => {
  // TODO: Fields validation to trigger onChange rather than onBlur
  // TODO: Fields error validation to act as parameters to disable "Proceed to next" button

  const {
    state: {
      contactInfo: { fullName, emailAddress, phoneNumber },
      enquiryDetails: { urgency },
    },
    boundSetContactValue,
    boundSetEnquiryDetailsValue,
  } = useStore()

  const { register, handleSubmit, errors, formState } = useForm<FormTypes>({
    mode: "onBlur",
    defaultValues: { fullName, emailAddress, phoneNumber },
  })

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data))}
      className="flex flex-col w-6/12 space-y-8 justify-center"
    >
      <StepHeader>
        <Title>Fill the form</Title>
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
              boundSetContactValue({
                keyName: "fullName",
                value: e.target.value,
              }),
          }}
        />

        {errors.fullName ? (
          <InputError>{errors.fullName?.message}</InputError>
        ) : null}
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
            name: "emailAddress",
            placeholder: "Enter your email",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              boundSetContactValue({
                keyName: "emailAddress",
                value: e.target.value,
              }),
          }}
        />

        {errors.emailAddress ? (
          <InputError>{errors.emailAddress?.message}</InputError>
        ) : null}
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
            type: "email",
            name: "phoneNumber",
            placeholder: "Enter your phone",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              boundSetContactValue({
                keyName: "phoneNumber",
                value: e.target.value,
              }),
          }}
        />

        {errors.phoneNumber ? (
          <InputError>{errors.phoneNumber?.message}</InputError>
        ) : null}
      </InputContainer>

      <div className="flex flex-col my-5 space-y-5 max-w-lg">
        <Lable>Urgency of finance (In Days)</Lable>
        <Slider
          defaultValue={urgency ?? "7"}
          steps={steps}
          style={{ minWidth: "500px" }}
          onChange={(e: ValueType) =>
            boundSetEnquiryDetailsValue({
              keyName: "urgency",
              value: `${e} days`,
            })
          }
        />
      </div>

      <br />
    </form>
  )
}

export default ContactForm
