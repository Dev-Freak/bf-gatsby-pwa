import * as React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import SummaryItem, { SummaryItemProps } from "../../components/Shared/SummaryItem"

export default {
  title: "Shared/SummaryItem",
  component: SummaryItem,
} as Meta

const Template: Story<SummaryItemProps> = args => <SummaryItem {...args} />

export const Default = Template.bind({})
Default.args = {
  itemTitle: "Path",
  value: "Residential",
}

export const Long = Template.bind({})
Long.args = {
  itemTitle: "Income",
  value: {
    primary_applicant: {
      invoice_type: ["PAYG Employed", "Self Employed"],
      Test: "Testing 1",
    },
    secondary_applicant: {
      invoice_type: "PAYG Employed",
      Test: "Testing 2",
    },
  },
}
