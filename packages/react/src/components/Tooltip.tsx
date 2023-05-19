import { ComponentProps } from 'react'
import * as ReactTooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const TooltipContent = styled(ReactTooltip.Content, {
  padding: '$3',
  borderRadius: '$sm',
  color: '$gray100',
  backgroundColor: '$gray900',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  userSelect: 'none',

  '&[data-state=delayed-open][data-side=top]': {
    animation: `${slideUpAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=delayed-open][data-side=bottom]': {
    animation: `${slideDownAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=delayed-open][data-side=left]': {
    animation: `${slideLeftAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state=delayed-open][data-side=right]': {
    animation: `${slideRightAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const TooltipArrow = styled(ReactTooltip.Arrow, {
  fill: '$gray900',
})

export interface TooltipProps
  extends ComponentProps<typeof ReactTooltip.Root>,
    ComponentProps<typeof TooltipContent> {
  content: string
}

export function Tooltip({
  content,
  children,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) {
  return (
    <ReactTooltip.Provider delayDuration={100}>
      <ReactTooltip.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <ReactTooltip.Trigger asChild>{children}</ReactTooltip.Trigger>
        <ReactTooltip.Portal>
          <TooltipContent {...props}>
            {content} <TooltipArrow />
          </TooltipContent>
        </ReactTooltip.Portal>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  )
}
