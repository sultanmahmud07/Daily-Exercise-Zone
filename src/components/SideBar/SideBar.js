import React from 'react';
import "./SideBar.css"
import user from "../../images/user-img.jfif"


const SideBar = (props) => {
  const {list} =props
  return (
    <div className='position-set'>
    <div className="user-info">
     <div className='user-img'>
      <img src={user} alt="" />
     </div>
     <div className="user-desc">
      <p className='name'>FontEnd developer.</p>
      <p className='mail'>Email: sultanmahmud09@gmail.com</p>
      <p>Address: <span className='addre'>1814-Road Manikganj, Dhaka.</span></p>
     </div>
     </div>

     <div className="break-container">
      <h2>Add A Break</h2>
      <div className="time-container">
        <div className="time-set"><span>10</span>s</div>
        <div className="time-set"><span>20</span>s</div>
        <div className="time-set"><span>30</span>s</div>
        <div className="time-set"><span>40</span>s</div>
        <div className="time-set"><span>50</span>s</div>
      </div>
     </div>

     <div className="Exercise-details">
      <h2>Add A Break</h2>
      <div className="time-container">
        <p>Exercise time</p>
        <p>200 seconds</p>
      </div>
      <div className="time-container">
        <p>Break time</p>
        <p>15 seconds</p>
      </div>
     </div>
     <button className='acticity-btn'>Activity Completed</button>
    </div>
  );
};

export default SideBar;