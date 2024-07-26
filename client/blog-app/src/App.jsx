import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'



function App() {
  

  return (
    <>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/projects" element={<Projects/>}/>
          
        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
