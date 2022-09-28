import React from 'react';
import './SingleCart.css';

const SingleCart = (props) => {
  const {age, name, img, dis, time} =props.category
  // console.log(props.category)
  return (
    <div className='cart'>
      <div className='img-container'>
      <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p className='para'>{dis}</p>
      <p>Age: {age}</p>
      <p>Time required:<span className='secound'> {time}</span>'s</p>
      <button className='curt-btn'>Add To List</button>
    </div>
  );
};

export default SingleCart;