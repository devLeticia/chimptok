import { createRoot } from 'react-dom/client'

import { LoadingOverlay, Spinner } from './styles'

let loadingContainer: HTMLDivElement | null = null

export function Loading() {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  )
}

export const loading = {
  open: () => {
    loadingContainer = document.createElement('div')
    document.body.appendChild(loadingContainer)
    createRoot(loadingContainer).render(<Loading />)
  },
  close: () => {
    if (loadingContainer) {
      document.body.removeChild(loadingContainer)
      loadingContainer = null
    }
  },
}
