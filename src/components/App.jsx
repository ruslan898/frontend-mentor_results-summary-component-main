import './app.scss';
import FinalScoreCard from './ui/finalScoreCard/FinalScoreCard';
import SummaryCard from './ui/SummaryCard/SummaryCard';

export default function App() {
  return (
    <main>
      <div className="results-summary-component">
        <FinalScoreCard />
        <SummaryCard />
      </div>
    </main>
  );
}
