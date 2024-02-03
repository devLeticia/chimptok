import { useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { HeaderContainer, RouteTitle } from './styles'
import logotype from '../../../public/logotype_chimptok.svg'
import { Timer, ChartBar, FlagBanner, UserCircle } from 'phosphor-react'

export function Header() {
  const location = useLocation()

  useEffect(() => {
    const routeTitle = getRouteTitle(location.pathname)

    document.title = `${routeTitle} on Chimptok`
  }, [location.pathname])

  const getRouteTitle = (pathname: string) => {
    switch (pathname) {
      case '/timer':
        return 'Timer'
      case '/reports':
        return 'Reports'
      case '/goals/active':
        return 'Goals and Tasks'
      case '/goals/past':
        return 'Goals and Tasks'
      case '/user-settings':
        return 'User Settings'
      default:
        return 'Your Default Title'
    }
  }

  return (
    <HeaderContainer>
      <img
        src={logotype}
        alt="Coolest Chimp logo smiling to you"
        className="logo"
      />
      <RouteTitle>{getRouteTitle(location.pathname)}</RouteTitle>
      <nav>
        <NavLink to="/timer" title="Timer">
          <Timer size={24} weight="fill" />
        </NavLink>
        <NavLink to="/reports" title="Reports">
          <ChartBar size={24} weight="fill" />
        </NavLink>
        <NavLink to="/goals" title="Goals and Tasks">
          <FlagBanner size={24} weight="fill" />
        </NavLink>
        <NavLink to="/user-settings" title="User Settings">
          <UserCircle size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
