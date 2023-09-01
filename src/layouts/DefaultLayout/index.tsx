import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* // monkey image must come here */}
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
