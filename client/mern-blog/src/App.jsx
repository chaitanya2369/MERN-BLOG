import {Route, Routes} from 'react-router-dom'
import './App.css'
import Post from './Post'
import Header from './Header'
import Layout from './Layout'
import IndexPage from './pages/IndexPages'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { UserContextProvider } from './Usercontext'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import EditPost from './pages/EditPost'
function App() {
  
  return (
    <UserContextProvider>
    <Routes>
      <Route path= '/' element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/create' element={<CreatePost/>}></Route>
        <Route path='/post/:id' element={<PostPage/>}></Route>
        <Route path='/edit/:id' element={<EditPost/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
