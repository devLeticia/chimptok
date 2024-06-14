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
        <Route path="/coming-soon" element={<Auth />} />
        <Route
          path="/account-confirmation/:confirmationCode"
          element={<Auth />}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="*" element={<Auth />} />
    </Routes>
  )
}

const PrivateRoutes = () => {
  function validToken(): boolean {
    const token: string | null = localStorage.getItem('access_token')
    if (token) {
      let tokenInfo
      try {
        tokenInfo = jwtDecode(token) as { exp: number }
        const currentTime: number = new Date().getTime() / 1000
        const validTokenDate = currentTime < tokenInfo.exp
        console.log('validTokenDate', validTokenDate)
        return validTokenDate
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
      const validUserId =
        userId !== null &&
        userId !== undefined &&
        userId !== '' &&
        typeof userId !== 'number'
      console.log('USUARIO VALIDO', validUserId)
      return validUserId
    }
    return false
  }

  // console.log('!tokenExpired', !tokenExpired(), 'validUserId', validUserId())
  return validToken() && validUserId() ? <Outlet /> : <Navigate to="/login" />
}
