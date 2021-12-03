import React from 'react';
import axios from 'axios';
import Trivia from './Trivia.jsx';
import EndView from './EndView.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {},
      rundown: [],
      view: 'welcome',
    };

    this.getRandomQ = this.getRandomQ.bind(this);
    this.changeView = this.changeView.bind(this);
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

  render() {
    if (this.state.view === 'end') {
      return (
        <EndView
          changeView={this.changeView}
          rundown={this.state.rundown}
        />
      );
    }
    return (
      <div id="main">
        <Trivia
          current={this.state.current}
          getRandomQ={this.getRandomQ}
          changeView={this.changeView}
        />
      </div>
    );
  }
}

export default App;
