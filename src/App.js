import React from 'react';
import Home from './components/Home';
import wishes from './wishes.json';
import './stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: wishes,
    }
    this.handleAddWish = this.handleAddWish.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleAddWish(wish) {
    this.setState({
      wishes: [...this.state.wishes, wish]
    })
  }

  handleRemove(index) {
    if (window.confirm('Estas seguro que ya no lo deseas?')) {
      this.setState({
        wishes: this.state.wishes.filter((whis, i) => {
          if (i > -1) {
            return (i !== index)
          }
        })
      })
    }
  }

  render() {
    const { wishes } = this.state;
    return (
      <div className='app'>
        <Home
          wishes={wishes}
          handleAddWish={this.handleAddWish}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
