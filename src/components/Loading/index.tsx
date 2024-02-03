import { LoadingOverlay, Spinner } from './styles'

interface LoadingProps {
  isLoading: boolean
}

export function Loading({ isLoading }: LoadingProps) {
  return isLoading ? (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  ) : null
}
