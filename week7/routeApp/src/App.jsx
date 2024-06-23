import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css' 
import { Suspense } from 'react'
const  Landing  = React.lazy(()=>import('./components/Landing'))
const Dashboard = React.lazy(()=>import('./components/Dashboard'))
function App() {
  
  // Suspense API
  return (
    <BrowserRouter>
    <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
    </BrowserRouter>
  )
}


function Appbar() {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={()=>{
        navigate("/");
      }}>Landing page</button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
    </div>
  )}

export default App
