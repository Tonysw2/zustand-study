import { Navigate, Outlet } from 'react-router'
import { useShallow } from 'zustand/shallow'
import { useStore } from '@/stores'

interface AuthGuardProps {
	isPrivate?: boolean
}

export const AuthGuard = ({ isPrivate = false }: AuthGuardProps) => {
	const { isAuthenticated } = useStore(
		useShallow((state) => ({
			isAuthenticated: state.isAuthenticated,
		})),
	)

	if (isPrivate && !isAuthenticated) {
		return <Navigate to="/sign-in" replace />
	}

	if (!isPrivate && isAuthenticated) {
		return <Navigate to="/" replace />
	}

	return <Outlet />
}
