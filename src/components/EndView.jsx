import React from 'react';
import moment from 'moment';

class EndView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rundown: this.props.rundown,
    };
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
        <div>Your grand total: {}</div>
      </div>
    );
  }
}

export default EndView;