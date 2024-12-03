import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer, RouterContainer, Copyright } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <RouterContainer>
        <Outlet /> 
      <Copyright>© 2024 Chimptok All Rights Reserved</Copyright>
      </RouterContainer>
    </LayoutContainer>
  )
}
