import { RouterProvider } from 'react-router'
import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './providers/theme'
import { router } from './routes'

export const App = () => {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
			<Toaster />
		</ThemeProvider>
	)
}
