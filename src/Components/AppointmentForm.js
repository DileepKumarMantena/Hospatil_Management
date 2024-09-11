// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/AppointmentForm.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Select from "react-select";

// const departmentOptions = [
//   // Cardiology
//   { value: "Dr. William Brown", label: "Dr. William Brown (Cardiology, 2yr EXP)" },
//   { value: "Dr. Emily White", label: "Dr. Emily White (Cardiology, 1yr EXP)" },
//   { value: "Dr. Jane Doe", label: "Dr. Jane Doe (Cardiology, 3yr EXP)" },
//   { value: "Dr. John Smith", label: "Dr. John Smith (Cardiology, 5yr EXP)" },

//   // Orthopedics
//   { value: "Dr. Alice Johnson", label: "Dr. Alice Johnson (Orthopedic, 2yr EXP)" },
//   { value: "Dr. Sarah Brown", label: "Dr. Sarah Brown (Orthopedic, 7yr EXP)" },
//   { value: "Dr. James Davis", label: "Dr. James Davis (Orthopedic, 3yr EXP)" },
//   { value: "Dr. Olivia Smith", label: "Dr. Olivia Smith (Orthopedic, 6yr EXP)" },

//   // Neurologist
//   { value: "Dr. Laura Wilson", label: "Dr. Laura Wilson (Neurologist, 4yr EXP)" },
//   { value: "Dr. Michael Brown", label: "Dr. Michael Brown (Neurologist, 2yr EXP)" },
//   { value: "Dr. Emma Clarke", label: "Dr. Emma Clarke (Neurologist, 4yr EXP)" },
//   { value: "Dr. David Scott", label: "Dr. David Scott (Neurologist, 1yr EXP)" },
//   { value: "Dr. Sarah Roberts", label: "Dr. Sarah Roberts (Neurologist, 6yr EXP)" },

//   // General Surgeon
//   { value: "Dr. Henry Adams", label: "Dr. Henry Adams (General Surgeon, 4yr EXP)" },
//   { value: "Dr. Laura Green", label: "Dr. Laura Green (General Surgeon, 2yr EXP)" },
//   { value: "Dr. William Foster", label: "Dr. William Foster (General Surgeon, 1yr EXP)" },
//   { value: "Dr. Emma Harris", label: "Dr. Emma Harris (General Surgeon, 5yr EXP)" },
//   { value: "Dr. David Clark", label: "Dr. David Clark (General Surgeon, 3yr EXP)" }
// ];

// function AppointmentForm() {
//   const [patientName, setPatientName] = useState("");
//   const [patientNumber, setPatientNumber] = useState("");
//   const [patientGender, setPatientGender] = useState("default");
//   const [appointmentTime, setAppointmentTime] = useState("");
//   const [preferredMode, setPreferredMode] = useState("default");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [selectedDepartment, setSelectedDepartment] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = {};

//     if (!patientName.trim()) {
//       errors.patientName = "Patient name is required";
//     }

//     if (!patientNumber.trim() || patientNumber.length !== 10) {
//       errors.patientNumber = "Patient phone number must be 10 digits";
//     }

//     if (patientGender === "default") {
//       errors.patientGender = "Please select patient gender";
//     }

//     if (!appointmentTime) {
//       errors.appointmentTime = "Appointment time is required";
//     }

//     if (!selectedDepartment) {
//       errors.selectedDepartment = "Please select a department";
//     }

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setPatientName("");
//     setPatientNumber("");
//     setPatientGender("default");
//     setAppointmentTime("");
//     setPreferredMode("default");
//     setSelectedDepartment(null);
//     setFormErrors({});
//     toast.success("Appointment Scheduled!", {
//       position: toast.POSITION.TOP_CENTER,
//       onOpen: () => setIsSubmitted(true),
//       onClose: () => setIsSubmitted(false),
//     });
//   };
//   return (
//     <div className="appointment-form-section">
//       <h1 className="legal-siteTitle">
//         <Link to="/">Evergreen Memorial Hospital</Link>
//       </h1>

//       <div className="form-container">
//         <h2 className="form-title">
//           <span>Book Appointment Online</span>
//         </h2>

//         <form className="form-content" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Patient Full Name:</label>
//             <input
//               type="text"
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               className={formErrors.patientName ? "input-error" : ""}
//             />
//             {formErrors.patientName && (
//               <p className="error-message">{formErrors.patientName}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Patient Phone Number:</label>
//             <input
//               type="text"
//               value={patientNumber}
//               onChange={(e) => setPatientNumber(e.target.value)}
//               className={formErrors.patientNumber ? "input-error" : ""}
//             />
//             {formErrors.patientNumber && (
//               <p className="error-message">{formErrors.patientNumber}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Patient Gender:</label>
//             <select
//               value={patientGender}
//               onChange={(e) => setPatientGender(e.target.value)}
//               className={formErrors.patientGender ? "input-error" : ""}
//             >
//               <option value="default">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="private">I will inform Doctor only</option>
//             </select>
//             {formErrors.patientGender && (
//               <p className="error-message">{formErrors.patientGender}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Preferred Appointment Time:</label>
//             <input
//               type="datetime-local"
//               value={appointmentTime}
//               onChange={(e) => setAppointmentTime(e.target.value)}
//               className={formErrors.appointmentTime ? "input-error" : ""}
//             />
//             {formErrors.appointmentTime && (
//               <p className="error-message">{formErrors.appointmentTime}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Preferred Mode:</label>
//             <select
//               value={preferredMode}
//               onChange={(e) => setPreferredMode(e.target.value)}
//               className={formErrors.preferredMode ? "input-error" : ""}
//             >
//               <option value="default">Select</option>
//               <option value="voice">Voice Call</option>
//               <option value="video">Video Call</option>
//             </select>
//             {formErrors.preferredMode && (
//               <p className="error-message">{formErrors.preferredMode}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Department:</label>
//             <Select
//               options={departmentOptions}
//               value={selectedDepartment}
//               onChange={setSelectedDepartment}
//               placeholder="Select Department"
//               className={formErrors.selectedDepartment ? "input-error" : ""}
//               isSearchable
//             />
//             {formErrors.selectedDepartment && (
//               <p className="error-message">{formErrors.selectedDepartment}</p>
//             )}
//           </div>

//           <button type="submit" className="text-appointment-btn">
//             Confirm Appointment
//           </button>

//           <p
//             className="success-message"
//             style={{ display: isSubmitted ? "block" : "none" }}
//           >
//             Appointment details have been sent to the patient's phone number via SMS.
//           </p>
//         </form>
//       </div>

//       <div className="legal-footer">
//         <p>© 2013-2024 Evergreen Memorial Hospital. All rights reserved.</p>
//       </div>

//       <ToastContainer autoClose={5000} limit={1} closeButton={false} />
//     </div>
//   );
// }

// export default AppointmentForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css"; // Keep this for form-specific styles
import "../Styles/Doctors.css"; // Reusing this for header/footer styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const departmentOptions = [
  {
    value: "Dr. William Brown",
    label: "Dr. William Brown (Cardiology, 2yr EXP)",
  },
  { value: "Dr. Emily White", label: "Dr. Emily White (Cardiology, 1yr EXP)" },
  { value: "Dr. Jane Doe", label: "Dr. Jane Doe (Cardiology, 3yr EXP)" },
  { value: "Dr. John Smith", label: "Dr. John Smith (Cardiology, 5yr EXP)" },
  {
    value: "Dr. Alice Johnson",
    label: "Dr. Alice Johnson (Orthopedic, 2yr EXP)",
  },
  { value: "Dr. Sarah Brown", label: "Dr. Sarah Brown (Orthopedic, 7yr EXP)" },
  { value: "Dr. James Davis", label: "Dr. James Davis (Orthopedic, 3yr EXP)" },
  {
    value: "Dr. Olivia Smith",
    label: "Dr. Olivia Smith (Orthopedic, 6yr EXP)",
  },
  {
    value: "Dr. Laura Wilson",
    label: "Dr. Laura Wilson (Neurologist, 4yr EXP)",
  },
  {
    value: "Dr. Michael Brown",
    label: "Dr. Michael Brown (Neurologist, 2yr EXP)",
  },
  { value: "Dr. Emma Clarke", label: "Dr. Emma Clarke (Neurologist, 4yr EXP)" },
  { value: "Dr. David Scott", label: "Dr. David Scott (Neurologist, 1yr EXP)" },
  {
    value: "Dr. Sarah Roberts",
    label: "Dr. Sarah Roberts (Neurologist, 6yr EXP)",
  },
  {
    value: "Dr. Henry Adams",
    label: "Dr. Henry Adams (General Surgeon, 4yr EXP)",
  },
  {
    value: "Dr. Laura Green",
    label: "Dr. Laura Green (General Surgeon, 2yr EXP)",
  },
  {
    value: "Dr. William Foster",
    label: "Dr. William Foster (General Surgeon, 1yr EXP)",
  },
  {
    value: "Dr. Emma Harris",
    label: "Dr. Emma Harris (General Surgeon, 5yr EXP)",
  },
  {
    value: "Dr. David Clark",
    label: "Dr. David Clark (General Surgeon, 3yr EXP)",
  },
];

function AppointmentForm() {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!patientName.trim()) errors.patientName = "Patient name is required";
    if (!patientNumber.trim() || patientNumber.length !== 10)
      errors.patientNumber = "Patient phone number must be 10 digits";
    if (patientGender === "default")
      errors.patientGender = "Please select patient gender";
    if (!appointmentTime)
      errors.appointmentTime = "Appointment time is required";
    if (!selectedDepartment)
      errors.selectedDepartment = "Please select a department";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setSelectedDepartment(null);
    setFormErrors({});
    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-page-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-title-content">
          <h1 className="header-title">
            <Link to="/">Evergreen Memorial Hospital</Link>
          </h1>
        </div>
      </header>

      {/* Main Form Section */}
      <div className="appointment-form-section">
        <div className="form-container">
          <h2 className="form-title">
            <span>Book Appointment Online</span>
          </h2>
          <form className="form-content" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Patient Full Name:</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className={formErrors.patientName ? "input-error" : ""}
              />
              {formErrors.patientName && (
                <p className="error-message">{formErrors.patientName}</p>
              )}
            </div>

            <div className="form-group">
              <label>Patient Phone Number:</label>
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className={formErrors.patientNumber ? "input-error" : ""}
              />
              {formErrors.patientNumber && (
                <p className="error-message">{formErrors.patientNumber}</p>
              )}
            </div>

            <div className="form-group">
              <label>Patient Gender:</label>
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className={formErrors.patientGender ? "input-error" : ""}
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="error-message">{formErrors.patientGender}</p>
              )}
            </div>

            <div className="form-group">
              <label>Preferred Appointment Time:</label>
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className={formErrors.appointmentTime ? "input-error" : ""}
              />
              {formErrors.appointmentTime && (
                <p className="error-message">{formErrors.appointmentTime}</p>
              )}
            </div>

            <div className="form-group">
              <label>Preferred Mode:</label>
              <select
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                className={formErrors.preferredMode ? "input-error" : ""}
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
              </select>
              {formErrors.preferredMode && (
                <p className="error-message">{formErrors.preferredMode}</p>
              )}
            </div>

            <div className="form-group">
              <label>Department:</label>
              <Select
                options={departmentOptions}
                value={selectedDepartment}
                onChange={setSelectedDepartment}
                placeholder="Select Department"
                className={formErrors.selectedDepartment ? "input-error" : ""}
                isSearchable
              />
              {formErrors.selectedDepartment && (
                <p className="error-message">{formErrors.selectedDepartment}</p>
              )}
            </div>

            <button type="submit" className="text-appointment-btn">
              Confirm Appointment
            </button>

            <p
              className="success-message"
              style={{ display: isSubmitted ? "block" : "none" }}
            >
              Appointment details have been sent to the patient's phone number
              via SMS.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>© 2013-2024 Evergreen Memorial Hospital. All rights reserved.</p>
        </div>
      </footer>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
