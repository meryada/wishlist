import React from 'react';
import '../stylesheets/WishForm.scss';

class WishForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event) {
    const value = event.currentTarget.value;
    this.setState({
      title: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddWish(this.state)
  }

  render() {

    const { value } = this.props;
    return (
      <div className='input__container'>
        <form onSubmit={this.handleSubmit}>
          <label className='input__label'></label>
          <input className='input__input' type='text' onKeyUp={this.handleInput} value={value} placeholder='Esribe aquí tu deseo...'></input>
          <button className='input_submit' type='submit'>Añadir</button>
        </form>
      </div>
    );
  }
}

export default WishForm;



