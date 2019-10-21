import React from 'react';
import Header from './Header';
import WishForm from './WishForm';
import Counter from './Counter';
import WhisList from './WishList';
import PropTypes from 'prop-types';

const Home = props => {
  const { wishes, handleAddWish, handleSubmit, handleInput, handleRemove } = props;
  return (
    <React.Fragment>
      <Header></Header>
      <Counter
        wishes={wishes} />
      <WishForm
        wishes={wishes}
        handleAddWish={handleAddWish}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />
      < WhisList
        wishes={wishes}
        handleRemove={handleRemove}
      />
    </React.Fragment>
  );
}

Home.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddWish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Home;