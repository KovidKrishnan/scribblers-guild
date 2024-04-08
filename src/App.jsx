import {BrowserRouter, Routes as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import ErrorPage from './components/common/ErrorPage'
import HomePage from './components/HomePage/HomePage'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}> </Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
