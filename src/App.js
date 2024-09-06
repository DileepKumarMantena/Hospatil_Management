import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import DoctorsList from "./Pages/DoctorsList"; 
import Cardiology from "./Components/Cardiology";
import Orthopedics from "./Components/Orthopedics"
import Neurology from "./Components/Neurology"
import GeneralSurgery from "./Components/GeneralSurgery"

function App() {
  return (
    <div className="App">
      <Router basename="/Evergreen-Memorial-Hospital">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctors" element={<DoctorsList/>} /> {/* Define the Doctors route */}
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/generalsurgery" element={<GeneralSurgery />} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
