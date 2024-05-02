import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { Navbar } from './components/Navbar'
import { Forgot } from './views/Forgot'
import { List } from './views/List'
import { Movie } from './views/Movie'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/forgot' element ={<Forgot />} />
        <Route path='/list' element ={<List />} />
        <Route path='/movie' element ={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App