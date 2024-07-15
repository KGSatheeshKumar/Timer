import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const StudentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sk col-7 my-3 mx-auto">
      <div className="card-header">
      <i className="bi bi-eye" style={{ fontSize: '100px', cursor: 'pointer' }} onClick={toggleVisibility}></i>
      </div>
      <div className="student-details">
        <h1 className="name">John Doe</h1>
        <p className="registration-number">123456789</p>
      </div>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>
      <div className={`additional-content ${isVisible ? 'visible' : ''}`}>
        <p>Additional student information goes here. It can include bio, contact details, or any other relevant information.</p>
      </div>
    </div>
  );
};

export default StudentInfo;
