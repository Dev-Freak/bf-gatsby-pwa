import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import Welcome from "../../components/EasyFlow/Welcome"
import ApplicantsQuantity from "../../components/EasyFlow/ApplicantsQuantity"
import ApplicationType from "../../components/EasyFlow/ApplicationType"
import ProjectType from "../../components/EasyFlow/ProjectType"
import ApplicantIncomeType from "../../components/EasyFlow/ApplicantIncomeType"

import Stepper, { StepperProps } from "../../components/DynamicStepper/Stepper"

export default {
  title: "Stepper/EasyFlow",
  componenet: Stepper,
} as Meta

const Template: Story<StepperProps> = args => (
  <StateProvider>
    <Stepper {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
Default.args = {
  steps: [
    <Welcome />,
    <ApplicantsQuantity />,
    <ApplicationType />,
    <ProjectType />,
    <ApplicantIncomeType />,
  ],
}
