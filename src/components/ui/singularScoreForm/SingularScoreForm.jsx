import clsx from 'clsx';

import './singularScoreForm.scss';

export default function SingularScoreForm({
  iconUrl,
  text,
  score,
  variant = 'reaction',
}) {
  return (
    <div className={clsx('singular-score-form', variant.toLowerCase())}>
      <div className="category">
        <img src={iconUrl} alt={`An icon representing ${variant}`} />
        <h3 className="title">{text}</h3>
      </div>
      <div className="score">
        <span className="score-num">{score}</span>/ 100
      </div>
    </div>
  );
}
