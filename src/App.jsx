import {BrowserRouter, Routes as  Routes, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import ErrorPage from './components/common/ErrorPage'
import HomePage from './components/HomePage/HomePage'
import './App.css'
import { useState } from 'react'
import WritePost from './components/Post/WritePost'
import InterestsPage from './components/Interests/InterestsPage'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}> </Route>
        <Route path='/home' element={<HomePage selectedPage={selectedPage} setSelectedPage={setSelectedPage}></HomePage>}></Route>
        <Route path='/search' element={<HomePage selectedPage='search' setSelectedPage={setSelectedPage}></HomePage>}></Route>
        <Route path='/profile' element={<HomePage selectedPage='profile' setSelectedPage={setSelectedPage}></HomePage>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/write-post' element={<WritePost></WritePost>}></Route>
        <Route path='/interests' element={<InterestsPage></InterestsPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
