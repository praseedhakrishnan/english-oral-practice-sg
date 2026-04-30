import { useState } from 'react'

function scoreBarColor(score) {
  if (score >= 4) return 'bg-green-400'
  if (score === 3) return 'bg-yellow-400'
  return 'bg-red-400'
}

function scoreTextColor(score) {
  if (score >= 4) return 'text-green-600'
  if (score === 3) return 'text-yellow-600'
  return 'text-red-500'
}

// Props: { question, transcript, feedback, onNext, isLast }
function PerQuestionFeedback({ question, transcript, feedback, onNext, isLast }) {
  const [seesOpen, setSeesOpen] = useState(true)

  const scores = feedback?.scores || { relevance: 3, vocabulary: 3, elaboration: 3, confidence: 3 }
  const tip = feedback?.tip || 'Keep practising and you will improve!'
  const modelAnswer = feedback?.modelAnswer || {}
  const total = (scores.relevance || 0) + (scores.vocabulary || 0) + (scores.elaboration || 0) + (scores.confidence || 0)

  const criteriaList = [
    { key: 'relevance', label: 'Relevance', emoji: '🎯' },
    { key: 'vocabulary', label: 'Vocabulary', emoji: '📚' },
    { key: 'elaboration', label: 'Elaboration', emoji: '💬' },
    { key: 'confidence', label: 'Confidence', emoji: '⭐' },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🤖</span>
        <h2 className="text-xl font-bold text-gray-800">Feedback for Your Answer</h2>
      </div>

      {/* Question recap */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
        <p className="text-xs text-primary-400 font-semibold uppercase tracking-wide mb-1">Examiner's Question</p>
        <p className="text-gray-800 font-medium">{question}</p>
      </div>

      {/* Your answer */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Your Answer</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {transcript && transcript.trim() ? transcript : <span className="italic text-gray-400">(No answer recorded)</span>}
        </p>
      </div>

      {/* Score bars */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold text-gray-700">📊 Scores</p>
          <span className={`text-lg font-bold px-3 py-1 rounded-full ${total >= 16 ? 'bg-green-100 text-green-700' : total >= 12 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-600'}`}>
            {total} / 20
          </span>
        </div>
        {criteriaList.map(({ key, label, emoji }) => {
          const score = scores[key] || 0
          return (
            <div key={key}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600 font-medium">{emoji} {label}</span>
                <span className={`text-xs font-bold ${scoreTextColor(score)}`}>{score}/5</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all ${scoreBarColor(score)}`}
                  style={{ width: `${(score / 5) * 100}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Tip box */}
      <div className="bg-mint-50 border border-mint-100 rounded-xl p-4">
        <p className="text-xs text-mint-500 font-semibold uppercase tracking-wide mb-1">💡 Tip</p>
        <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
      </div>

      {/* SEES Model Answer */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <button
          onClick={() => setSeesOpen((o) => !o)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div>
            <span className="font-semibold text-gray-800">📖 SEES Model Answer</span>
            <p className="text-xs text-gray-400 mt-0.5">State → Elaborate → Example → State Again</p>
          </div>
          <span className="text-gray-400 text-lg">{seesOpen ? '▲' : '▼'}</span>
        </button>

        {seesOpen && (
          <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3">
            {/* Legend */}
            <div className="flex flex-wrap gap-1 mb-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">S = State</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">E = Elaborate</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">E = Example</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">S = State Again</span>
            </div>

            {modelAnswer.state && (
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full mb-1">🔵 STATE</span>
                <p className="text-gray-700 text-sm leading-relaxed">{modelAnswer.state}</p>
              </div>
            )}
            {modelAnswer.elaborate && (
              <div>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full mb-1">🟣 ELABORATE</span>
                <p className="text-gray-700 text-sm leading-relaxed">{modelAnswer.elaborate}</p>
              </div>
            )}
            {modelAnswer.example && (
              <div>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mb-1">🟢 EXAMPLE</span>
                <p className="text-gray-700 text-sm leading-relaxed">{modelAnswer.example}</p>
              </div>
            )}
            {modelAnswer.stateAgain && (
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full mb-1">🔵 STATE AGAIN</span>
                <p className="text-gray-700 text-sm leading-relaxed">{modelAnswer.stateAgain}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="w-full py-4 bg-primary-400 text-white rounded-xl font-bold text-lg hover:bg-primary-500 transition-all shadow-md active:scale-95"
      >
        {isLast ? 'View Summary 📊' : 'Next Question →'}
      </button>
    </div>
  )
}

export default PerQuestionFeedback
