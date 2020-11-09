import * as React from "react"

import StepHeader from "../../DynamicStepper/StepHeader"

import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import CheckBoxWithDescription from "../../Shared/CheckBoxWithDescription"

import useContactForm from "../../../hooks/useContactForm"
import InputContainer from "../../Shared/Inputs/InputContainer"
import Lable from "../../Shared/Inputs/Lable"
import Input from "../../Shared/Inputs/Input"
import InputError from "../../Shared/Inputs/InputError"

const ContactForm: React.FC = () => {
  const { inputs, form, boundSetContactValue } = useContactForm()

  return (
    <form
      onSubmit={form.handleSubmit(data => console.log(data))}
      className="flex flex-1 flex-col space-y-8"
    >
      <StepHeader>
        <TitleWithTooltip title="Fill the form">Norem ipsum...</TitleWithTooltip>
      </StepHeader>

      <InputContainer>
        <Lable isRequired={true}>Full name</Lable>
        <Input
          {...{
            ref: form.register({
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

        {form.errors.fullName ? (
          <InputError>{form.errors.fullName?.message}</InputError>
        ) : null}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Email address</Lable>
        <Input
          {...{
            ref: form.register({
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

        {form.errors.emailAddress ? (
          <InputError>{form.errors.emailAddress?.message}</InputError>
        ) : null}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Phone number</Lable>
        <Input
          {...{
            ref: form.register({
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

        {form.errors.phoneNumber ? (
          <InputError>{form.errors.phoneNumber?.message}</InputError>
        ) : null}
      </InputContainer>

      <CheckBoxWithDescription
        checked={inputs.authorize}
        onToggleCheck={(check: boolean) =>
          boundSetContactValue({ keyName: "authorize", value: check })
        }
      >
        Do you authorise BorgFinancial to use your information?
      </CheckBoxWithDescription>
    </form>
  )
}

export default ContactForm
