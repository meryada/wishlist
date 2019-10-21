import React from 'react';
import '../stylesheets/WishList.scss';
import PropTypes from 'prop-types';

const WishList = props => {
  const { wishes, handleRemove } = props;
  return (
    <div className='list__container'>
      {wishes.map((wish, index) => {
        return (
          <div className='item__container' key={index}>
            <i className="fas fa-times-circle item__remove" onClick={handleRemove.bind(this, index)}></i>
            <label className='item__label'>Deseo #{index + 1} </label>
            <input className='item__input' type="checkbox" key={index} name={wish.title} value={wish.title}/> {wish.title}
          </div>
        );
      })}
    </div>
  )
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default WishList;