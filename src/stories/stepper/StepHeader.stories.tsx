import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import StepHeader from "../../components/DynamicStepper/StepHeader"
import TitleWithTooltip from "../../components/Shared/TitleWithTooltip"
import Description from "../../components/Shared/Description"

export default {
  title: "Stepper/StepHeader",
  component: StepHeader,
} as Meta

const Template: Story = args => (
  <StepHeader {...args}>
    <TitleWithTooltip title="Welcome">Lorem ipsum...</TitleWithTooltip>
    <Description>Please select the most relevant option to your needs</Description>
  </StepHeader>
)

export const Default = Template.bind({})
