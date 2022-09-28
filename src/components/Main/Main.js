import React, { useEffect, useState } from 'react';
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
        hello: {categorys.length}
       <div className="category-container">
       {
          categorys.map(category =><SingleCart
             category ={category}
            //  key ={id}
             ></SingleCart>)
        }
       </div>
      </div>


        {/* This is cart section code here */}
      <div className="side-info">
        <h3>This is Cart</h3>
      </div>
    </div>
  );
};

export default Main;