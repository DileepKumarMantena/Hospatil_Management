import React from 'react';
import '../Styles/Orthopedics.css';

const orthopedicDoctors = [
  {
    name: 'Dr. Alice Johnson',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Orthopedic Surgeon',
  },
  {
    name: 'Dr. Robert Lee',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Pediatric Orthopedics',
  },
  {
    name: 'Dr. Olivia Smith',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Sports Medicine',
  },
  {
    name: 'Dr. James Davis',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Joint Replacement Surgeon',
  },
  {
    name: 'Dr. Sarah Brown',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Spine Surgery',
  },
  {
    name: 'Dr. Alice Johnson',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Orthopedic Surgeon',
  },
  {
    name: 'Dr. Robert Lee',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Pediatric Orthopedics',
  },
  {
    name: 'Dr. Olivia Smith',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Sports Medicine',
  },
  {
    name: 'Dr. James Davis',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Joint Replacement Surgeon',
  },
  {
    name: 'Dr. Sarah Brown',
    profileImage: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
    specialization: 'Spine Surgery',
  },
];

function Orthopedics() {
  return (
    <div className="orthopedics-container">
      <h2>Orthopedics Department</h2>
      <p>Meet our expert team of orthopedic surgeons.</p>
      <div className="orthopedics-doctors-grid">
        {orthopedicDoctors.map((doctor, index) => (
          <div key={index} className="orthopedics-doctor-card">
            <img
              src={doctor.profileImage}
              alt={`${doctor.name} profile`}
              className="orthopedics-doctor-image"
            />
            <div>
              <h3 className="orthopedics-doctor-name">{doctor.name}</h3>
              <p className="orthopedics-doctor-specialization">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orthopedics;
