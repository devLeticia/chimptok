import { Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage/index'
import { Reports } from './pages/Reports/index'
import { Goals } from './pages/Goals'
import { UserSettings } from './pages/UserSettings'
import { FullPageLayout } from './layouts/FullPageLayout'
import { Auth } from './pages/Auth'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/timer" />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/timer" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/user-settings" element={<UserSettings />} />
      </Route>
      <Route path="/" element={<FullPageLayout />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" />
      </Route> */}
    </Routes>
  )
}
