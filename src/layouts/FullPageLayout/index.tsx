import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function FullPageLayout() {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  )
}
