import './finalScoreCard.scss';

export default function FinalScoreCard() {
  return (
    <div className="final-score-card">
      <div className="wrapper">
        <h1 className="title">Your Result</h1>
        <div className="score-box">
          <span className="score-num">76</span>
          of 100
        </div>
        <div className="result-text">
          <h2 className="result-title">Great</h2>
          <p className="result-subtitle">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}
