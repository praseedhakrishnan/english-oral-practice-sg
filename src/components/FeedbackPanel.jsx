import ProgressBar from './ProgressBar.jsx'
import { getBarColor } from '../utils/scoringUtils.js'

function FeedbackPanel({ feedback, type = 'reading' }) {
  if (!feedback) return null

  const readingCriteria = [
    { key: 'pronunciation', label: 'Pronunciation' },
    { key: 'fluency', label: 'Fluency' },
    { key: 'expression', label: 'Expression' },
    { key: 'pace', label: 'Pace' },
  ]

  const sbcCriteria = [
    { key: 'vocabulary', label: 'Vocabulary' },
    { key: 'relevance', label: 'Relevance' },
    { key: 'elaboration', label: 'Elaboration' },
    { key: 'confidence', label: 'Confidence' },
  ]

  const criteria = type === 'reading' ? readingCriteria : sbcCriteria

  return (
    <div className="space-y-5">
      {/* Overall feedback text */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-semibold text-blue-800 mb-2">💬 Overall Feedback</h3>
        <p className="text-blue-700 text-sm leading-relaxed">{feedback.feedback}</p>
      </div>

      {/* Criteria bars */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-4">
        <h3 className="font-semibold text-gray-700 mb-3">📊 Score Breakdown</h3>
        {criteria.map(({ key, label }) => (
          <ProgressBar
            key={key}
            value={feedback[key] || 0}
            label={label}
            color={getBarColor(feedback[key] || 0)}
          />
        ))}
      </div>

      {/* Strengths */}
      {feedback.strengths?.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-green-700 mb-2">✅ Strengths</h3>
          <ul className="space-y-1">
            {feedback.strengths.map((s, i) => (
              <li key={i} className="text-green-700 text-sm flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvements */}
      {feedback.improvements?.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 className="font-semibold text-orange-700 mb-2">💡 Areas to Improve</h3>
          <ul className="space-y-1">
            {feedback.improvements.map((s, i) => (
              <li key={i} className="text-orange-700 text-sm flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FeedbackPanel
