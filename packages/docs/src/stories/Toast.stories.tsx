import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Button } from '@gui-ui/react'
import { useEffect, useRef, useState } from 'react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Upgrade available',
    content: 'We have just release GUI-UI 2.0!',
    duration: 2000,
  },
  argTypes: {
    duration: {
      type: 'number',
    },
  },
} as Meta<ToastProps>

const ToastWithHooks = (args: ToastProps) => {
  const [open, setOpen] = useState(false)

  const timerRef = useRef(0)

  const onOpenToast = () => {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <Button onClick={onOpenToast}>Upgrade</Button>
      <Toast open={open} onOpenChange={setOpen} {...args} />
    </>
  )
}

export const Primary: StoryObj<ToastProps> = {
  render: (args) => <ToastWithHooks {...args} />,
}
