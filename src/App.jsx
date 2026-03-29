import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
// import Payments from "./pages/Payments";
// import Login from "./pages/Login";
import Proposals from "./pages/Proposals";
import Invoice from "./pages/Invoice";
import Tasks from "./pages/Task";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/clients" element={<Clients />} /> 
        //  <Route path="/projects" element={<Projects />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/tasks" element={<Tasks />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/proposals" element={<Proposals/>} />
        <Route path="/invoice" element={<Invoice />} />


      </Routes>
    </BrowserRouter>
  );
}