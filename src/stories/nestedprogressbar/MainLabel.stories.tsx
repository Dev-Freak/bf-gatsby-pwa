import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import MainLabel, {
  MainLabelProps,
} from "../../components/NestedProgressBar/MainLabel"

export default {
  title: "Nested Progress Bar/MainLabel",
  component: MainLabel,
} as Meta

const Template: Story<MainLabelProps> = args => (
  <div className="bg-brand w-32 h-12 flex items-center justify-center">
    <MainLabel {...args}>Applicants</MainLabel>
  </div>
)

export const Default = Template.bind({})
