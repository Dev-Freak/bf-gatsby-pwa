import * as React from "react"

import StepHeader from "../../DynamicStepper/StepHeader"

import TitleWithTooltip from "../../Shared/TitleWithTooltip"
import CheckBoxWithDescription from "../../Shared/CheckBoxWithDescription"

import useContactForm from "../../../hooks/useContactForm"
import InputContainer from "../../Shared/Inputs/InputContainer"
import Lable from "../../Shared/Inputs/Lable"
import Input from "../../Shared/Inputs/Input"

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
            }),
            name: "fullName",
            placeholder: "Enter full name",
            onChange: e =>
              boundSetContactValue({
                keyName: "fullName",
                value: e.target.value,
              }),
          }}
        />

        {form.errors.fullName ? <p>{form.errors.fullName?.message}</p> : null}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Email address</Lable>
        <Input
          {...{
            ref: form.register({
              required: { value: true, message: "This field is required" },
            }),
            name: "emailAddress",
            placeholder: "Enter your email",
            onChange: e =>
              boundSetContactValue({
                keyName: "emailAddress",
                value: e.target.value,
              }),
          }}
        />

        {form.errors.emailAddress ? (
          <p>{form.errors.emailAddress?.message}</p>
        ) : null}
      </InputContainer>

      <InputContainer>
        <Lable isRequired={true}>Phone number</Lable>
        <Input
          {...{
            ref: form.register({
              required: { value: true, message: "This field is required" },
            }),
            name: "phoneNumber",
            placeholder: "Enter your phone",
            onChange: e =>
              boundSetContactValue({
                keyName: "phoneNumber",
                value: e.target.value,
              }),
          }}
        />

        {form.errors.phoneNumber ? <p>{form.errors.phoneNumber?.message}</p> : null}
      </InputContainer>

      <CheckBoxWithDescription
        checked={inputs.authorize}
        onToggleCheck={e => boundSetContactValue({ keyName: "authorize", value: e })}
      >
        Do you authorise BorgFinancial to use your information?
      </CheckBoxWithDescription>
    </form>
  )
}

export default ContactForm
