import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Compose from './pages/Compose/Compose'
import Blogs from './pages/Blogs/Blogs'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import Error404 from './pages/Error404/Error404'
import Edit from './pages/Edit/Edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path='/compose' element={<Compose />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
