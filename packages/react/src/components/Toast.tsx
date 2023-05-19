import { ComponentProps } from 'react'
import * as ReactToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import { styled, keyframes } from '../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const ToastContainer = styled(ReactToast.Root, {
  backgroundColor: '$gray900',
  fontFamily: '$default',
  padding: '$3 $5',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray600',
  display: 'grid',
  gridTemplateAreas: '"title close" "description close"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$8',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

const ToastTitle = styled(ReactToast.Title, {
  gridArea: 'title',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$gray100',
  marginBottom: '$1',
})

const ToastDescription = styled(ReactToast.Description, {
  gridArea: 'description',
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
})

const ToastClose = styled(ReactToast.Close, {
  gridArea: 'close',
  color: '$gray200',
  cursor: 'pointer',
  justifySelf: 'end',
})

const ToastViewport = styled(ReactToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  maxWidth: '100vw',
  minWidth: '360px',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999,
  outline: 'none',
})

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  altText?: string
}

export function Toast({
  title,
  content,
  altText = 'toast-action',
  ...props
}: ToastProps) {
  return (
    <ReactToast.Provider>
      <ToastContainer {...props}>
        {title && <ToastTitle>{title}</ToastTitle>}
        <ToastDescription>{content}</ToastDescription>
        <ToastClose asChild aria-label="Close">
          <X weight="bold" />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </ReactToast.Provider>
  )
}

Toast.displayName = 'Toast'
