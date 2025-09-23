import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages for project 
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
