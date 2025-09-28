import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </>
  )
}
export default App
