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
import { ActiveGoals } from './pages/Goals/ActiveGoals'
import { PastGoals } from './pages/Goals/PastGoals'
import { NewGoalForm } from './pages/Goals/NewGoalForm'

export function Router() {
  return (
    <Routes>
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
      <Route path="/" element={<FullPageLayout />}>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/forgot-password" element={<Auth />} />
        <Route path="/reset-password" element={<Auth />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
