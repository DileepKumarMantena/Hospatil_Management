import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import DoctorsList from "./Pages/DoctorsList";
import Cardiology from "./Components/Cardiology";
import Doctors from "./Components/Doctors";
import Orthopedics from "./Components/Orthopedics";
import Neurology from "./Components/Neurology";
import GeneralSurgery from "./Components/GeneralSurgery";
import MoreDepartments from './Components/MoreDepartments';
import Dermatology from "./Components/Dermatology";
import Gastroenterology from "./Components/Gastroenterology";
import Oncologist from "./Components/Oncologist";

function App() {
  return (
    <div className="App">
      <Router basename="/Evergreen-Memorial-Hospital">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/generalsurgery" element={<GeneralSurgery />} />
          <Route path="/moredepartments" element={<MoreDepartments/>}/>
          <Route path="/dermatology" element={<Dermatology />} />
          <Route path="/gastroenterology" element={<Gastroenterology />} />
          <Route path="/oncologist" element={<Oncologist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
