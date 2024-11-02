import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import ProfessorDashboard from "./pages/ProfessorDashboard"
import NotFound from "./components/additional_comps/notFound"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard/>}/>
        <Route path="/professor/:professorId" element={<ProfessorDashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
