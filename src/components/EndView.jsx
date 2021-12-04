import React from 'react';
import moment from 'moment';
import axios from 'axios';

class EndView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rundown: this.props.rundown,
      name: '',
      email: '',
      score: this.props.score,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    console.log(this.state.name, this.state.email);
    axios.post('/users', {
      name: this.state.name,
      email: this.state.email,
      score: this.state.score,
    })
    .then(() => {
      console.log('Posted :)')
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="ending-page">
        <ol className="rundown-list">
          {this.state.rundown.map(entry => {
            return (
              <li>
                <h4>Q: {entry.question}</h4>
                <h4>A: {entry.answer}</h4>
                <div>${entry.points}</div>
                <div>Originally aired {moment(entry.airdate).format('MMMM Do, YYYY')}</div>
              </li>
            );
          })}
        </ol>
        <div>Your grand total: {this.state.score}</div>

        <form onSubmit={this.handleSubmit}>
          <h2>Enter your email to save your score!</h2>
          <label>Name: </label>
          <input type="text" id="name" onChange={this.handleChange}></input>
          <label>Email: </label>
          <input type="text" id="email" onChange={this.handleChange}></input>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default EndView;