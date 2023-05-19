import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@gui-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Add</Button>,
    content: 'add a new user',
    side: 'bottom',
    sideOffset: 5,
    avoidCollisions: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['top', 'bottom', 'right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
