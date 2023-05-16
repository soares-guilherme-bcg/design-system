import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gui-ui/react'

export default {
  title: 'Data dsiplay/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://api.dicebear.com/6.x/pixel-art/svg',
    alt: 'Avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
