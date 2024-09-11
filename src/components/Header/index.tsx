import { useEffect } from 'react'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import { HeaderContainer, RouteTitle, SignOutContainer } from './styles'
import logotype from '../../../public/logotype_chimptok.svg'
import {
  Timer,
  ChartBar,
  FlagBanner,
  UserCircle,
  SignOut,
} from '@phosphor-icons/react'
import { loading } from '../Loading'
import AccountService from '../../http/requests/accounts/account.service'
import { toast } from './../Toast/index'

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

  const navigate = useNavigate()

  function handleSignOut(): void {
    const userId: string | null = localStorage.getItem('user_id')
    if (userId !== null) {
      loading.open()
      AccountService.logOut(userId)
        .then((resp) => {
          const response = resp
          // console.log('response', response)
          concludeUILogOut()
        })
        .catch((_err) => {
          console.log(_err)
          toast.show(`Erro ao deslogar:`, 'danger', 10000)
        })
        .finally(() => {
          loading.close()
        })
    }
  }

  function concludeUILogOut(): void {
    // localStorage.removeItem('access_token')
    localStorage.clear()
    navigate('/login')
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
        <SignOutContainer onClick={handleSignOut}>
          <p>Sign out</p>
          <SignOut size={24} weight="duotone" />
        </SignOutContainer>
      </nav>
    </HeaderContainer>
  )
}
