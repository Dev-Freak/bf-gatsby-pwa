import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StateProvider from "../../store/AppStore"
import Welcome from "../../components/EasyFlow/Welcome"
import Applicants from "../../components/EasyFlow/Applicants"

import Stepper, { StepperProps } from "../../components/DynamicStepper/Stepper"

export default {
  title: "Stepper/Stepper",
  componenet: Stepper,
} as Meta

const Template: Story<StepperProps> = args => (
  <StateProvider>
    <Stepper {...args} />
  </StateProvider>
)

export const Default = Template.bind({})
Default.args = {
  steps: [<Welcome />, <Applicants />],
}
