import { Routes, Route, Navigate } from 'react-router-dom'
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

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/timer" />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/timer" element={<Timer />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Route>
      <Route path="/" element={<FullPageLayout />}>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/forgot-password" element={<Auth />} />
        <Route path="/reset-password" element={<Auth />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" />
      </Route> */}
    </Routes>
  )
}
