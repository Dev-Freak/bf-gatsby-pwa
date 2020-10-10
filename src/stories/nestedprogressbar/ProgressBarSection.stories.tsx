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
  <div className="bg-brand w-screen h-24 flex items-center justify-center md:w-6/12 md:h-full md:py-10">
    <ProgressBarSection {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  section: {
    title: "Applicants",
    subNodes: ["Basic Information", "Contact Information", "Residential Details"],
  },
  activeNode: 1,
  isActive: true,
  isCompleted: false,
}
