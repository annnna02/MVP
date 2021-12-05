import React from 'react';
import Countdown from 'react-countdown';
import EndView from './EndView.jsx';
import anime from 'animejs';

class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
      category: '',
      value: '',
      dropdown: '',
    };

    this.updateQ = this.updateQ.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.renderer = this.renderer.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () => this.updateQ(this.props.current), 500
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.current !== prevProps.current) {
      this.updateQ(this.props.current);
    }
  }

  updateQ(newQ) {
    this.setState({
      current: newQ,
      category: newQ.category.title,
      value: '',
      dropdown: '',
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  handleDropdownChange(e) {
    console.log(e.target.value);
    this.setState({
      dropdown: e.target.value,
    })
  }

  handleSubmit(e) {
    event.preventDefault();
    if (this.isValid(this.state.value)) {
      this.props.updateScore(this.state.current.value);
      this.props.getRandomQ();
      anime({
        targets: '.trivia-main',
        scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
        rotateY: {value: '+=360', delay: 200},
        easing: 'easeInOutSine',
        duration: 525,
      });
    } else {
      const xMax = 16;
      const shake = anime({
        targets: '.trivia-main',
        easing: 'easeInOutSine',
        duration: 375,
        translateX: [
          {
            value: xMax * -1,
          },
          {
            value: xMax,
          },
          {
            value: xMax/-2,
          },
          {
            value: xMax/2,
          },
          {
            value: 0,
          }
        ],
        autoplay: true,
      });
      const send = () => {
        shake.restart();
      };
      setTimeout(() => this.props.changeView('end'), 700);
    }
  }

  isValid(answer) {
    // if (!this.state.dropdown) {
    //   this.props.changeView('end');
    // }
    return answer.toLowerCase() === this.state.current.answer.toLowerCase();
  }

  renderer({seconds, completed}) {
    if (completed) {
      return <></>;
    } else {
      const timesup = anime({
        targets: '.panic',
        translateX: ['-.25rem', '.25rem'],
        duration: 40,
        direction: 'alternate',
        loop: true,
      });
      return <div className={seconds <= 5 ? "panic" : "countdown"}>0:{seconds}</div>;
    }
  }

  render() {
    return (
      <>
        <Countdown
          date={Date.now() + 30000}
          renderer={this.renderer}
          // onComplete={() => this.props.changeView('end')}
        />
        <div className="trivia-main">
          <h2 className="category">{this.state.category.toUpperCase()}</h2>
          <h3 className="clue">Q: {this.state.current.question}</h3>
          <select className="dropdown" value={this.state.dropdown} onChange={this.handleDropdownChange}>
            <option default>Change me!</option>
            <option value="object">What is</option>
            <option value="person">Who is</option>
          </select>
          <form className="answer-bar" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Guess!"/>
          </form>
        </div>
      </>
    );
  }
}

export default Trivia;