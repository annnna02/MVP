import React from 'react';

class Trivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
      category: '',
      value: '',
    };

    this.updateQ = this.updateQ.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit(e) {
    event.preventDefault();
    alert(`Submitted ${this.state.value}`);
  }

  render() {
    return (
      <div id="trivia-main">
        <h2>Q: {this.state.current.question}</h2>
        <h4>Category: {this.state.category}</h4>
        {/* TODO: take into consideration person/object selections in answer*/}
        <select>
          <option default>Change me!</option>
          <option value="object">What is</option>
          <option value="person">Who is</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Guess!"/>
        </form>
      </div>
    );
  }
}

export default Trivia;