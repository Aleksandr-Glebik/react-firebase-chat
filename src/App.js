import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppRouter from './components/AppRouter'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from './index'
import {useContext} from 'react'
import Loader from './components/Loader'

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
