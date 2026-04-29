import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { getScoreLabel, getScoreColor, formatDate, getBadges } from '../utils/scoringUtils.js'

function MiniChart({ sessions }) {
  if (sessions.length < 2) return null

  const width = 300
  const height = 80
  const padding = 10
  const scores = sessions.map((s) => s.score)
  const maxScore = 20
  const minScore = 0

  const points = scores.map((score, i) => {
    const x = padding + (i / (scores.length - 1)) * (width - padding * 2)
    const y = height - padding - ((score - minScore) / (maxScore - minScore)) * (height - padding * 2)
    return `${x},${y}`
  })

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-20">
      <polyline
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        points={points.join(' ')}
      />
      {scores.map((score, i) => {
        const x = padding + (i / (scores.length - 1)) * (width - padding * 2)
        const y = height - padding - ((score - minScore) / (maxScore - minScore)) * (height - padding * 2)
        return (
          <circle key={i} cx={x} cy={y} r="4" fill="#dc2626" />
        )
      })}
    </svg>
  )
}

function ProgressDashboard() {
  const { state, dispatch } = useApp()
  const [confirmClear, setConfirmClear] = useState(false)

  const sessions = state.sessions
  const readingSessions = sessions.filter((s) => s.type === 'reading')
  const sbcSessions = sessions.filter((s) => s.type === 'sbc')
  const badges = getBadges(sessions)

  const avgScore = sessions.length
    ? Math.round(sessions.reduce((sum, s) => sum + s.score, 0) / sessions.length)
    : 0

  const handleClear = () => {
    dispatch({ type: 'CLEAR_SESSIONS' })
    setConfirmClear(false)
  }

  if (sessions.length === 0) {
    return (
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📊</span>
          <h1 className="text-2xl font-bold text-gray-800">My Progress</h1>
        </div>
        <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm">
          <div className="text-5xl mb-4">🎯</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">No sessions yet!</h2>
          <p className="text-gray-500 mb-5">Complete a practice session to see your progress here.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/reading" className="px-5 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all">
              📖 Try Reading
            </Link>
            <Link to="/sbc" className="px-5 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all">
              🎤 Try SBC
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📊</span>
          <h1 className="text-2xl font-bold text-gray-800">My Progress</h1>
        </div>
        {!confirmClear ? (
          <button
            onClick={() => setConfirmClear(true)}
            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            🗑️ Clear
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={handleClear} className="text-sm bg-red-600 text-white px-3 py-1 rounded-lg">
              Confirm
            </button>
            <button onClick={() => setConfirmClear(false)} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-red-600">{sessions.length}</div>
          <div className="text-xs text-gray-500 mt-1">Total Sessions</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
          <div className={`text-2xl font-bold ${getScoreColor(avgScore)}`}>{avgScore}</div>
          <div className="text-xs text-gray-500 mt-1">Average Score</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-gray-700">{badges.length}</div>
          <div className="text-xs text-gray-500 mt-1">Badges Earned</div>
        </div>
      </div>

      {/* Chart */}
      {sessions.length >= 2 && (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-3">📈 Score Trend</h2>
          <MiniChart sessions={sessions} />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Oldest</span>
            <span>Latest</span>
          </div>
        </div>
      )}

      {/* Breakdown */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="text-2xl mb-1">📖</div>
          <div className="text-lg font-bold text-gray-700">{readingSessions.length}</div>
          <div className="text-xs text-gray-500">Reading Aloud</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="text-2xl mb-1">🎤</div>
          <div className="text-lg font-bold text-gray-700">{sbcSessions.length}</div>
          <div className="text-xs text-gray-500">SBC Sessions</div>
        </div>
      </div>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <h2 className="font-semibold text-gray-700 mb-3">🏅 Badges Earned</h2>
          <div className="grid grid-cols-2 gap-2">
            {badges.map((badge) => (
              <div key={badge.id} className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-center gap-2">
                <span className="text-2xl">{badge.emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-yellow-800">{badge.label}</div>
                  <div className="text-xs text-yellow-600">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Session history */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <h2 className="font-semibold text-gray-700 mb-3">📋 Session History</h2>
        <div className="space-y-2">
          {[...sessions].reverse().map((session, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-700 truncate">
                  {session.type === 'reading' ? '📖' : '🎤'} {session.title}
                </div>
                <div className="text-xs text-gray-400">{formatDate(session.date)} · {session.level}</div>
              </div>
              <div className="ml-3 text-right">
                <div className={`font-bold ${getScoreColor(session.score)}`}>{session.score}/20</div>
                <div className="text-xs text-gray-400">{getScoreLabel(session.score)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressDashboard
