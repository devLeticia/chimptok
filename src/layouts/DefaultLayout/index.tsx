import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer, RouterContainer, Copyright } from './styles'

export function DefaultLayout() {
  const year = new Date().getFullYear().toString()
  return (
    <LayoutContainer>
      <Header />
      <RouterContainer>
        <Outlet /> 
      <Copyright>© {year} Chimptok All Rights Reserved</Copyright>
      </RouterContainer>
    </LayoutContainer>
  )
}
