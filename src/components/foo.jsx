import React from 'react';
export default class Foo extends React.Component {

  componentWillMount() {
    this.setState({
      message : 'not clicked'
    })
  }

  onClickButton() {
    
    this.setState({
      message : 'clicked!'
    })
  }

  render() {
    return (
      <div className="avatar">
        <p>{ this.state.message }</p>
        <button onClick={() => this.onClickButton() }>Do thing</button>
      </div>
    );
  }
}