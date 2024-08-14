

import { Outlet } from 'react-router'
import { Header } from './Components/index'


function App() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
