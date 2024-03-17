import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import FullResumePage from './pages/FullResumePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="resume" element={<FullResumePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
