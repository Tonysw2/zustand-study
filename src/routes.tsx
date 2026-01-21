import { createBrowserRouter } from 'react-router'
import { AuthGuard } from './components/guards/auth-guard'
import { DashboardPage } from './pages/dashboard'
import { SignInPage } from './pages/sign-in'

export const router = createBrowserRouter([
  {
    element: <AuthGuard isPrivate />,
    children: [
      {
        path: '/',
        Component: DashboardPage,
      },
    ],
  },

  {
    element: <AuthGuard />,
    children: [
      {
        path: '/sign-in',
        Component: SignInPage,
      },
    ],
  },
])
