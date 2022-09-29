import React, { useState } from 'react';
import "./SideBar.css"
import user from "../../images/user-img.jfif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = (props) => {
  const {list} =props
  let totalDuration = 0;
  for(const category of list){
    totalDuration =totalDuration + category.time;
  }

//  Activity toast here 
  const activityHandlerAdd = () =>{
    // console.log('success')
    toast.success("Wow! Your Activty Is Successfull!", {
      position: "top-center",
    });
  }

  const [time, setTime] =useState(0);
  const timeHandelSet1 = () =>{
    const divTime = 10;
    setTime(divTime)
    // localStorage set 
    const previousTime =localStorage.getItem("time")
    const oldTime =JSON.parse(previousTime)
    localStorage.setItem("time", JSON.stringify(divTime))
    if(oldTime){
      // console.log('asse')
    }
    else{
      
      // console.log('nai')
    }
    // console.log(time)
  }
  const timeHandelSet2 = () =>{
    const divTime = 20;
    localStorage.setItem("time", JSON.stringify(divTime))
    const newStoreData =localStorage.getItem("time")
    const newData =JSON.parse(newStoreData)
    setTime(newData)
    console.log(newData)
  }
  const timeHandelSet3 = () =>{
    const divTime = 30;
    setTime(divTime)
  }
  const timeHandelSet4 = () =>{
    const divTime = 40;
    setTime(divTime)
  }
  const timeHandelSet5 = () =>{
    const divTime = 50;
    setTime(divTime)
  }
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
        <div onClick={timeHandelSet1} className="time-set"><span>10</span>s</div>
        <div onClick={timeHandelSet2} className="time-set"><span>20</span>s</div>
        <div onClick={timeHandelSet3} className="time-set"><span>30</span>s</div>
        <div onClick={timeHandelSet4} className="time-set"><span>40</span>s</div>
        <div onClick={timeHandelSet5} className="time-set"><span>50</span>s</div>
      </div>
     </div>

     <div className="Exercise-details">
      <h2>Add A Break</h2>
      <div className="time-container">
        <p>Exercise time</p>
        <p><span className='total-duration'>{totalDuration}</span> seconds</p>
      </div>
      <div className="time-container">
        <p>Break time</p>
        <p><span className='setTime'>{time}</span> seconds</p>
      </div>
     </div>
     <button onClick={activityHandlerAdd} className='acticity-btn'>Activity Completed</button>
     <ToastContainer />
    </div>
  );
};

export default SideBar;