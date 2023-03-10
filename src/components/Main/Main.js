import React, { useEffect, useState } from 'react';
import Question from '../Extra/Question';
import SideBar from '../SideBar/SideBar';
import SingleCart from '../SingleCart/SingleCart';
import './Main.css';


const Main = () => {
    const [categorys, setCategorys] = useState([]);
    const [list, setList] =useState([])
    useEffect(() =>{
      fetch('fakeData.json')
      .then(res =>res.json())
      .then(data =>setCategorys(data))
    }, [])

    const handelAddToList =(category)=>{
      const newList =[...list, category]
      setList(newList)
      console.log(list)
    }

  return (
    <div className='main-container'>
      <div className="main-survice">
        <h2 className='header-title'>Select today’s exercise  </h2> 
       <div className="category-container">
       {
          categorys.map(category =><SingleCart
             category ={category}
             key ={category.id}
             handelAddToList = {handelAddToList}
             ></SingleCart>)
        }
       </div>
       <Question></Question>
      </div>


        {/* This is cart section code here */}
      <div className="side-info">
       
        <SideBar list ={list}></SideBar>
      </div>
      
    </div>
  );
};

export default Main;