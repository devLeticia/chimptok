import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { NotFoundPage } from './pages/NotFoundPage/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" />
      </Route> */}
    </Routes>
  )
}
