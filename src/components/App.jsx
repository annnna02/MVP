import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Trivia from './Trivia.jsx';
import EndView from './EndView.jsx';
import Bye from './Bye.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {},
      rundown: [],
      view: 'welcome',
      score: 0,
    };

    this.getRandomQ = this.getRandomQ.bind(this);
    this.changeView = this.changeView.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  componentDidMount() {
    this.getRandomQ();
  }

  getRandomQ() {
    axios.get('/api')
      .then(q => {
        console.log(q.data[0]);
        this.setState({
          current: q.data[0],
          rundown: [
            ...this.state.rundown,
            {
              question: q.data[0].question,
              answer: q.data[0].answer,
              airdate: q.data[0].airdate,
              points: q.data[0].value,
              category: q.data[0].category.title,
            }
          ],
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeView(newView) {
    this.setState({
      view: newView,
    })
  }

  updateScore(val) {
    this.setState(prevState => {
      return {score: prevState.score + val}
    })
  }

  render() {
    return (
      <div id="main">
        <Header />
        <Trivia
          current={this.state.current}
          getRandomQ={this.getRandomQ}
          changeView={this.changeView}
          updateScore={this.updateScore}
          view={this.state.view}
        />
        {this.state.view === 'end'
          ? <EndView
            changeView={this.changeView}
            rundown={this.state.rundown}
            score={this.state.score}
            />
          : null}
        {this.state.view === 'goodbye!' ? <Bye /> : null}
      </div>
    );
  }
}

export default App;

