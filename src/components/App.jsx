import './app.scss'
import Button from './ui/button/Button'
import FinalScoreCard from './ui/finalScoreCard/FinalScoreCard'
import SingularScoreForm from './ui/singularScoreForm/SingularScoreForm'

export default function App() {
  return (
    <div className="results-summary-component">
      <FinalScoreCard />
      <SingularScoreForm />
      <Button />
    </div>
  )
}