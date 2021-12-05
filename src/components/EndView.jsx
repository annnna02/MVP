import React from 'react';
import moment from 'moment';
import axios from 'axios';
import anime from 'animejs';

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
      const roll = anime({
        targets: '.ending-modal',
        translateX: 10000,
        delay: 400,
        easing: 'easeInOutSine',
        rotate: '5turn',
        duration: 1500,
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(0,0,0, 0.45)' }} className="modal-bg">
        <div className="ending-modal modal-blur">
          <h2>Your Results!</h2>
          <div className="rundown-list">
            {this.state.rundown.map((entry, i) => {
              return (
                <div className={
                  i + 1 === this.state.rundown.length
                  ? "incorrect-tile"
                  : "correct-tile"}>
                  <div><b>Category:</b> {entry.category.toUpperCase()}</div>
                  <div><b>Q:</b> {entry.question}</div>
                  <div><b>A:</b> {entry.answer}</div>
                  <div>${entry.points}</div>
                  <div>Originally aired {moment(entry.airdate).format('MMMM Do, YYYY')}</div>
                  <br />
                </div>
              );
            })}
          </div>
          <br />
          <div className="grand-total">Your grand total: ${this.state.score}</div>

          <form onSubmit={this.handleSubmit}>
            <h3><i>Enter your email to save your score!</i></h3>
            <label>Name: </label>
            <input type="text" id="name" onChange={this.handleChange}></input>
            <label>   Email: </label>
            <input type="text" id="email" onChange={this.handleChange}></input>
            <br />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default EndView;