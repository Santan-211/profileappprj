
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Cristiano Ronaldo",
      bio: "Professional footballer and one of the greatest players of all time.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      profession: "Footballer"
    },
    shows: false,
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, time } = this.state;

    return (
      <div className="App">
        <h1>My Profile</h1>

        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <h3>Time since mounted: {time} seconds</h3>
      </div>
    );
  }
}

export default App;
