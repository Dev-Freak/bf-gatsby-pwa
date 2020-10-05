import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import BarConnector, {
  BarConnectorProps,
} from "../../components/SimpleProgressBar/BarConnector"

export default {
  title: "Shared/BarConnector",
  component: BarConnector,
} as Meta

const Template: Story<BarConnectorProps> = args => <BarConnector {...args} />

export const Idle = Template.bind({})

export const Completed = Template.bind({})
Completed.args = {
  isCompleted: true,
}
