import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import NestedLabel, {
  NestedLabelProps,
} from "../../components/NestedProgressBar/NestedLabel"

export default {
  title: "Nested Progress Bar/NestedLabel",
  component: NestedLabel,
} as Meta

const Template: Story<NestedLabelProps> = args => (
  <div className="bg-brand w-32 h-12 flex items-center justify-center">
    <NestedLabel {...args}>Basic Information</NestedLabel>
  </div>
)

export const Default = Template.bind({})
