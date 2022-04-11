import { useState } from "react";

function App() {
  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  // const [over, setOver] = useState(8);
  // const [ball, setBall] = useState(2);
  const [ball, setBall] = useState(50);

  const handleScore = (value) => {
    if (score > 100 || wicket > 11) {
      return;
    } else {
      setScore(score + value);
    }
  };

  const handleWicket = (value) => {
    if (score > 100 || wicket > 11) {
      return;
    } else {
      setWicket(wicket + value);
    }
  };
  // const handleOver = over + `.` + ball;
  // // console.log(handleOver)

  // const handleBall = () => {
  //   if (over === 20 || score > 100 || wicket > 11) {
  //     return;
  //   } else {
  //     if (ball === 5) {
  //       setOver(over + 1);
  //       setBall(ball * 0);
  //     } else {
  //       setBall(ball + 1);
  //     }
  //   }
  // };

  const indWon = () => {
    if (score > 100) {
      return <h1>India Won</h1>;
    }
  };

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              // ball
              // handleOver
              Math.floor(ball / 6) + "." + (ball % 6)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleScore(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleScore(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleScore(6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handleWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            setBall(ball + 1);
          }}
          disabled={score > 100 || wicket > 11}
        >
          Add 1
        </button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

      {indWon()}
    </div>
  );
}

export default App;
