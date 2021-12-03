import React from 'react';
import axios from 'axios';
import Trivia from './Trivia.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {},
      collection: {},
      view: 'welcome',
    };

    this.getRandomQ = this.getRandomQ.bind(this);
  }

  componentDidMount() {
    this.getRandomQ();
  }

  getRandomQ() {
    axios.get('/api')
      .then(q => {
        // console.log(q.data[0]);
        this.setState({
          current: q.data[0],
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="main">
        <Trivia current={this.state.current}/>
      </div>
    );
  }
}

export default App;

