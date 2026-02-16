import { useEffect, useState } from 'react';
import './summaryCard.scss';
import SingularScoreForm from '../singularScoreForm/SingularScoreForm';
import Button from '../button/Button';

export default function SummaryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/data.json');
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  const scoreFormEls = data.map((item) => {
    const { category, score, icon } = item;

    return (
      <SingularScoreForm
        iconUrl={icon}
        text={category}
        score={score}
        variant={category}
      />
    );
  });

  return (
    <div className="summary-card">
      <h2 className="main-title">Summary</h2>
      <div className="score-forms">{scoreFormEls}</div>
      <Button>Continue</Button>
    </div>
  );
}
