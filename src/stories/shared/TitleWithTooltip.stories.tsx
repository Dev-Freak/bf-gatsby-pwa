import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import TitleWithTooltip, {
  TitleWithTooltipProps,
} from "../../components/Shared/TitleWithTooltip"

export default {
  title: "Shared/TitleWithTooltip",
  component: TitleWithTooltip,
} as Meta

const Template: Story<TitleWithTooltipProps> = args => (
  <TitleWithTooltip {...args}>Lorem ipsum...</TitleWithTooltip>
)

export const Default = Template.bind({})
Default.args = {
  title: "Welcome",
}
