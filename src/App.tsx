import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages for project 
import Index from './pages/Index';
import { About } from './pages/About';
import Job from './pages/Job';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Job' element={<Job/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
