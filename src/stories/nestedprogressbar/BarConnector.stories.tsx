import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import BarConnector, {
  BarConnectorProps,
} from "../../components/NestedProgressBar/BarConnector"

export default {
  title: "Nested Progress Bar/BarConnector",
  component: BarConnector,
} as Meta

const Template: Story<BarConnectorProps> = args => (
  <div className="bg-brand w-32 h-12 flex items-center justify-center">
    <BarConnector {...args} />
  </div>
)

export const Default = Template.bind({})

export const Vertical = Template.bind({})
Vertical.args = {
  isVertical: true,
}
