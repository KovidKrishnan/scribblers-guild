import {BrowserRouter, Routes as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
