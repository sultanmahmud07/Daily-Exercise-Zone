import React from 'react';
import './SingleCart.css';

const SingleCart = (props) => {
  const {category, handelAddToList} =props
  const {age, name, img, dis, time} =category
  // console.log(handelAddToList)
  
  return (
    <div className='cart' data-aos="zoom-in">
      <div className='img-container'>
      <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p className='para'>{dis}</p>
      <p>Age: {age}</p>
      <p>Time required:<span className='secound'> {time}</span>'s</p>
      <button onClick={() => handelAddToList(category)} className='curt-btn'>Add To List</button>
    </div>
  );
};

export default SingleCart;