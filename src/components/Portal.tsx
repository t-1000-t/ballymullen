import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const toasterContainer = document.getElementById('toaster-portal') as HTMLElement

  return createPortal(children, toasterContainer)
}
