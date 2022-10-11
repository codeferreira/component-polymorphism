import { Button } from './components/button'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center gap-4">
      <Button>Login</Button>
      <Button asChild>
        <a href="#">Link to site</a>
      </Button>
    </div>
  )
}
