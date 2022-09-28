import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleCart from '../SingleCart/SingleCart';
import './Main.css';


const Main = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() =>{
      fetch('fakeData.json')
      .then(res =>res.json())
      .then(data =>setCategorys(data))
    }, [])

  return (
    <div className='main-container'>
      <div className="main-survice">
        <h2 className='header-title'>Select today’s exercise {categorys.length}</h2> 
       <div className="category-container">
       {
          categorys.map(category =><SingleCart
             category ={category}
             key ={category.id}
             ></SingleCart>)
        }
       </div>
      </div>


        {/* This is cart section code here */}
      <div className="side-info">
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default Main;