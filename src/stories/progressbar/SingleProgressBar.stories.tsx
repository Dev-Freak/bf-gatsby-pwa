import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import SimpleProgressBar, {
  SimpleProgressBarProps,
} from "../../components/SimpleProgressBar/SimpleProgressBar"

export default {
  title: "Shared/SimpleProgressBar",
  component: SimpleProgressBar,
} as Meta

const Template: Story<SimpleProgressBarProps> = args => (
  <SimpleProgressBar {...args} />
)

export const Starting = Template.bind({})
Starting.args = {
  length: 5,
  currentNode: 0,
}

export const InProgress = Template.bind({})
InProgress.args = {
  length: 5,
  currentNode: 2,
}

export const Completed = Template.bind({})
Completed.args = {
  length: 5,
  currentNode: 5,
}
