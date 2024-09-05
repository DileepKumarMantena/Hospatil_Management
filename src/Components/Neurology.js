import React from 'react';
import '../Styles/Neurology.css';

const neurologyDoctors = [
  {
    name: 'Dr. Laura Wilson',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurologist',
  },
  {
    name: 'Dr. Michael Brown',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurosurgeon',
  },
  {
    name: 'Dr. Emma Clarke',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Pediatric Neurology',
  },
  {
    name: 'Dr. David Scott',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Epilepsy Specialist',
  },
  {
    name: 'Dr. Sarah Roberts',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurophysiologist',
  },
  {
    name: 'Dr. Laura Wilson',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurologist',
  },
  {
    name: 'Dr. Michael Brown',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurosurgeon',
  },
  {
    name: 'Dr. Emma Clarke',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Pediatric Neurology',
  },
  {
    name: 'Dr. David Scott',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Epilepsy Specialist',
  },
  {
    name: 'Dr. Sarah Roberts',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s',
    specialization: 'Neurophysiologist',
  },
];

function Neurology() {
  return (
    <div className="neurology-container">
      <h2>Neurology Department</h2>
      <p>Meet our expert team of neurologists.</p>
      <div className="neurology-doctors-grid">
        {neurologyDoctors.map((doctor, index) => (
          <div key={index} className="neurology-doctor-card">
            <img
              src={doctor.profileImage}
              alt={`${doctor.name} profile`}
              className="neurology-doctor-image"
            />
            <div>
              <h3 className="neurology-doctor-name">{doctor.name}</h3>
              <p className="neurology-doctor-specialization">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Neurology;
