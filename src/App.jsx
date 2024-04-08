import {BrowserRouter, Routes as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import ErrorPage from './components/common/ErrorPage'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}> </Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
