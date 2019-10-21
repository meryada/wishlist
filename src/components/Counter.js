import React from 'react';
import '../stylesheets/Counter.scss';

const Counter = props => {
  const { wishes } = props;
  return (
    <div className='counter__container'>
      <span className='counter__title'>Contador de deseos</span>
      <span className='counter__number'> {wishes.length}</span>
    </div>
  )
}

export default Counter;