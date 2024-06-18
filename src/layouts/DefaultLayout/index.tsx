import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer, RouterContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* // monkey image must come here */}
      <Header />
      <RouterContainer>
        <Outlet />
      </RouterContainer>
    </LayoutContainer>
  )
}
