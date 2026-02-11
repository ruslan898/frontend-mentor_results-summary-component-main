import clsx from 'clsx';

import './singularScoreForm.scss';

import reactionIcon from '/src/assets/images/icon-reaction.svg';
import memoryIcon from '/src/assets/images/icon-memory.svg';
import verbalIcon from '/src/assets/images/icon-verbal.svg';
import visualIcon from '/src/assets/images/icon-visual.svg';

export default function SingularScoreForm({ variant = 'reaction', score }) {

  const variantIcon = {
    reaction: reactionIcon,
    memory: memoryIcon,
    verbal: verbalIcon,
    visual: visualIcon
  }

  return (
    <div className={clsx('singular-score-form', variant)}>
      <div className="category">
        <img src={variantIcon[variant]} alt={`An icon representing ${variant}`}/>
        <h3 className="title">Reaction</h3>
      </div>
      <div className="score">
        <span className="score-num">{score}</span>/ 100
      </div>
    </div>
  );
}
