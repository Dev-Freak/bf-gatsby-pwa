import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import ProgressBarSection, {
  ProgressBarSectionProps,
} from "../../components/NestedProgressBar/ProgressBarSection"

export default {
  title: "Nested Progress Bar/ProgressBarSection",
  component: ProgressBarSection,
} as Meta

const Template: Story<ProgressBarSectionProps> = args => (
  <div className="bg-brand w-8 h-8 flex items-center justify-center">
    <ProgressBarSection {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  section: {
    title: "Main",
    subNodes: ["First", "Second", "Third"],
  },
  isActive: true,
  isCompleted: false,
}
