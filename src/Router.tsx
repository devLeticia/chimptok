import { Outlet, Navigate, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Timer } from './pages/Timer'
import { NotFoundPage } from './pages/NotFoundPage/index'
import { Reports } from './pages/Reports/index'
import { Goals } from './pages/Goals'
import { UserSettings } from './pages/UserSettings'
import { FullPageLayout } from './layouts/FullPageLayout'
import { Auth } from './pages/Auth'
import { Welcome } from './pages/Welcome/index'
import { Onboarding } from './pages/Onboarding/index'
import { ActiveGoals } from './pages/Goals/ActiveGoals'
import { PastGoals } from './pages/Goals/PastGoals'
import { jwtDecode } from 'jwt-decode'

export function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate to="/timer" />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/timer" element={<Timer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/goals" element={<Goals />}>
            <Route index element={<Navigate to="active" />} />
            <Route path="active" element={<ActiveGoals />} />
            <Route path="past" element={<PastGoals />} />
          </Route>
          <Route path="/user-settings" element={<UserSettings />} />
        </Route>
      </Route>
      <Route path="/" element={<FullPageLayout />}>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/forgot-password" element={<Auth />} />
        <Route path="/reset-password" element={<Auth />} />
        <Route
          path="/account-confirmation/:confirmationCode"
          element={<Auth />}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

const PrivateRoutes = () => {
  function tokenExpired(): boolean {
    const token: string | null = localStorage.getItem('access_token')
    if (token) {
      let tokenInfo
      try {
        tokenInfo = jwtDecode(token) as { exp: number }
        console.log('jwt token info', tokenInfo)
        const currentTime: number = new Date().getTime() / 1000
        if (currentTime > tokenInfo.exp) {
          return false
        } else {
          return true
        }
      } catch (e) {
        console.error(e)
        return true
      }
    }
    return true
  }

  function validUserId(): boolean {
    const token: string | null = localStorage.getItem('access_token')
    if (token) {
      const tokenInfo = jwtDecode(token) as { userId: string }
      const userId = tokenInfo.userId.trim()
      console.log(
        'oiii',
        userId !== null &&
          userId !== undefined &&
          userId !== '' &&
          typeof userId !== 'number' &&
          isNaN(parseInt(userId)),
      )
      return (
        userId !== null &&
        userId !== undefined &&
        userId !== '' &&
        typeof userId !== 'number' &&
        isNaN(parseInt(userId))
      )
    }
    return false
  }

  return !tokenExpired() && validUserId() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
