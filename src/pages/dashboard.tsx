import { Button } from '@/components/ui/button'
import { useStore } from '@/stores'

export const DashboardPage = () => {
  const signOut = useStore((state) => state.signOut)

  return (
    <div className="grid h-screen place-content-center">
      <h1 className="text-center font-bold text-2xl uppercase">dash</h1>
      <Button type="button" onClick={signOut}>
        Sign out
      </Button>
    </div>
  )
}
