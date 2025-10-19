import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Goals from './pages/Goals';
import CreateGoal from './pages/CreateGoal';
import CreateTask from './pages/CreateTask';
import CheckTask from './pages/CheckTask';
import CheckGoal from './pages/CheckGoal';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goal/:id" element={<Goals />} />
        <Route path='creategoal' element={<CreateGoal />} />
        <Route path='createtask' element={<CreateTask />} />
        <Route path='checkgoal' element={<CheckGoal />} />
        <Route path='checktask' element={<CheckTask />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  )
}
export default App
