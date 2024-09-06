import React from 'react';
import '../Styles/GeneralSurgery.css';

const surgeryDoctors = [
  {
    name: 'Dr. Henry Adams',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'General Surgeon',
  },
  {
    name: 'Dr. Laura Green',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Laparoscopic Surgeon',
  },
  {
    name: 'Dr. William Foster',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Trauma Surgeon',
  },
  {
    name: 'Dr. Emma Harris',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Breast Surgeon',
  },
  {
    name: 'Dr. David Clark',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Colorectal Surgeon',
  },
  {
    name: 'Dr. Henry Adams',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'General Surgeon',
  },
  {
    name: 'Dr. Laura Green',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Laparoscopic Surgeon',
  },
  {
    name: 'Dr. William Foster',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Trauma Surgeon',
  },
  {
    name: 'Dr. Emma Harris',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Breast Surgeon',
  },
  {
    name: 'Dr. David Clark',
    profileImage: 'https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg',
    specialization: 'Colorectal Surgeon',
  },
];

function GeneralSurgery() {
  return (
    <div className="surgery-container">
      <h2>General Surgery Department</h2>
      <p>Meet our experienced general surgeons.</p>
      <div className="surgery-doctors-grid">
        {surgeryDoctors.map((doctor, index) => (
          <div key={index} className="surgery-doctor-card">
            <img
              src={doctor.profileImage}
              alt={`${doctor.name} profile`}
              className="surgery-doctor-image"
            />
            <div>
              <h3 className="surgery-doctor-name">{doctor.name}</h3>
              <p className="surgery-doctor-specialization">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralSurgery;
