import { getScoreLabel, getScoreColor, getScoreBgColor } from '../utils/scoringUtils.js'

function ScoreCard({ score, title = 'Overall Score', breakdown = null }) {
  const label = getScoreLabel(score)
  const color = getScoreColor(score)
  const bg = getScoreBgColor(score)

  return (
    <div className={`rounded-2xl p-6 ${bg} border-2 ${color.replace('text-', 'border-')} text-center`}>
      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">{title}</p>
      <div className={`text-6xl font-bold ${color} mb-1`}>{score}</div>
      <div className="text-gray-500 text-sm mb-2">out of 20</div>
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${bg} ${color} border ${color.replace('text-', 'border-')}`}>
        {label}
      </span>
      {breakdown && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-left">
          {Object.entries(breakdown).map(([key, val]) => (
            <div key={key} className="bg-white bg-opacity-60 rounded-lg p-2">
              <div className="text-xs text-gray-500 capitalize">{key}</div>
              <div className={`text-lg font-bold ${color}`}>{val}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ScoreCard
