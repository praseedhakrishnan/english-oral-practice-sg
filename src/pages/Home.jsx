import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { isDemoMode } from '../services/openaiService.js'
import { getScoreLabel, getScoreColor, formatDate } from '../utils/scoringUtils.js'

const LEVELS = ['P4', 'P5', 'P6']

function Home() {
  const { state, dispatch } = useApp()
  const recentSessions = state.sessions.slice(-3).reverse()

  return (
    <div className="space-y-6">
      {/* Demo mode banner */}
      {isDemoMode && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <p className="font-semibold text-blue-800">Practice Mode</p>
            <p className="text-blue-700 text-sm">Running in Practice Mode. AI feedback is simulated. Add an OpenAI API key to enable live AI feedback.</p>
          </div>
        </div>
      )}

      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <svg viewBox="0 0 800 208" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: 'block' }}>
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1565c0" />
              <stop offset="100%" stopColor="#42a5f5" />
            </linearGradient>
            <linearGradient id="overlayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#1565c0" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect width="800" height="208" fill="url(#skyGrad)" />
          {/* Clouds */}
          <ellipse cx="120" cy="45" rx="55" ry="22" fill="#fff" fillOpacity="0.25" />
          <ellipse cx="155" cy="38" rx="38" ry="18" fill="#fff" fillOpacity="0.2" />
          <ellipse cx="85" cy="40" rx="30" ry="15" fill="#fff" fillOpacity="0.2" />
          <ellipse cx="650" cy="35" rx="60" ry="24" fill="#fff" fillOpacity="0.2" />
          <ellipse cx="690" cy="28" rx="40" ry="18" fill="#fff" fillOpacity="0.18" />
          <ellipse cx="615" cy="32" rx="32" ry="15" fill="#fff" fillOpacity="0.18" />
          {/* Water */}
          <rect x="0" y="148" width="800" height="60" fill="#1976d2" fillOpacity="0.5" />
          <path d="M0 155 Q100 145 200 155 Q300 165 400 155 Q500 145 600 155 Q700 165 800 155 L800 208 L0 208 Z" fill="#1976d2" fillOpacity="0.35" />
          {/* MBS silhouette */}
          <rect x="260" y="80" width="20" height="80" fill="#0d47a1" fillOpacity="0.85" />
          <rect x="283" y="80" width="20" height="80" fill="#0d47a1" fillOpacity="0.85" />
          <rect x="306" y="80" width="20" height="80" fill="#0d47a1" fillOpacity="0.85" />
          <rect x="258" y="74" width="70" height="10" rx="3" fill="#1565c0" fillOpacity="0.9" />
          <ellipse cx="293" cy="68" rx="40" ry="9" fill="#1976d2" fillOpacity="0.9" />
          {/* City buildings */}
          <rect x="50" y="105" width="30" height="55" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="84" y="92" width="25" height="68" fill="#1565c0" fillOpacity="0.75" />
          <rect x="112" y="112" width="22" height="48" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="137" y="98" width="28" height="62" fill="#1565c0" fillOpacity="0.72" />
          <rect x="168" y="108" width="20" height="52" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="192" y="88" width="35" height="72" fill="#1565c0" fillOpacity="0.7" />
          <rect x="230" y="100" width="25" height="60" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="340" y="95" width="28" height="65" fill="#1565c0" fillOpacity="0.72" />
          <rect x="372" y="105" width="22" height="55" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="397" y="88" width="32" height="72" fill="#1565c0" fillOpacity="0.75" />
          <rect x="432" y="98" width="25" height="62" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="460" y="108" width="28" height="52" fill="#1565c0" fillOpacity="0.72" />
          <rect x="492" y="92" width="22" height="68" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="517" y="100" width="30" height="60" fill="#1565c0" fillOpacity="0.72" />
          <rect x="550" y="88" width="25" height="72" fill="#0d47a1" fillOpacity="0.75" />
          <rect x="578" y="105" width="30" height="55" fill="#1565c0" fillOpacity="0.7" />
          <rect x="612" y="95" width="22" height="65" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="637" y="108" width="28" height="52" fill="#1565c0" fillOpacity="0.72" />
          <rect x="668" y="98" width="24" height="62" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="695" y="88" width="30" height="72" fill="#1565c0" fillOpacity="0.75" />
          <rect x="728" y="102" width="26" height="58" fill="#0d47a1" fillOpacity="0.7" />
          <rect x="757" y="92" width="28" height="68" fill="#1565c0" fillOpacity="0.72" />
          {/* Gradient overlay */}
          <rect width="800" height="208" fill="url(#overlayGrad)" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="text-5xl mb-3 drop-shadow">🇸🇬</div>
          <h1 className="text-3xl font-bold mb-2 text-center drop-shadow">English Oral Practice SG</h1>
          <p className="text-blue-100 text-base text-center drop-shadow">AI-powered practice for PSLE English Oral Exam</p>
        </div>
      </div>

      {/* Level selector */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <h2 className="font-semibold text-gray-700 mb-3">🎓 Select Your Level</h2>
        <div className="flex gap-3">
          {LEVELS.map((level) => (
            <button
              key={level}
              onClick={() => dispatch({ type: 'SET_LEVEL', payload: level })}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all ${
                state.level === level
                  ? 'bg-primary-400 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Currently practising: {state.level}</p>
      </div>

      {/* Practice cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/reading"
          className="bg-white border-2 border-primary-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-primary-300 transition-all group"
        >
          <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:bg-primary-100 transition-colors">📖</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors">Reading Aloud</h2>
          <p className="text-gray-500 text-sm">Read a passage aloud and receive AI feedback on your pronunciation, fluency, and expression.</p>
          <div className="mt-4 inline-block bg-primary-50 text-primary-500 text-sm font-semibold px-3 py-1 rounded-full">
            Start Practising →
          </div>
        </Link>

        <Link
          to="/sbc"
          className="bg-white border-2 border-mint-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-mint-300 transition-all group"
        >
          <div className="w-14 h-14 bg-mint-50 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:bg-mint-100 transition-colors">🎤</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mint-400 transition-colors">Stimulus-Based Conversation</h2>
          <p className="text-gray-500 text-sm">Respond to examiner questions based on a visual stimulus and get detailed AI feedback.</p>
          <div className="mt-4 inline-block bg-mint-50 text-mint-400 text-sm font-semibold px-3 py-1 rounded-full">
            Start Practising →
          </div>
        </Link>
      </div>

      {/* Recent sessions */}
      {recentSessions.length > 0 && (
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
          <h2 className="font-semibold text-gray-700 mb-3">📋 Recent Sessions</h2>
          <div className="space-y-2">
            {recentSessions.map((session, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {session.type === 'reading' ? '📖' : '🎤'} {session.title}
                  </span>
                  <div className="text-xs text-gray-400">{formatDate(session.date)}</div>
                </div>
                <div className={`font-bold text-lg ${getScoreColor(session.score)}`}>
                  {session.score}/20
                  <div className="text-xs font-normal">{getScoreLabel(session.score)}</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/progress" className="block text-center text-primary-400 text-sm font-medium mt-3 hover:underline">
            View all progress →
          </Link>
        </div>
      )}

      {/* Tips */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <h2 className="font-semibold text-gray-700 mb-3">💡 Quick Tips</h2>
        <ul className="space-y-2">
          {[
            '📢 Speak clearly and at a moderate pace',
            '😊 Use expression and vary your tone',
            '🧠 Elaborate your answers with examples',
            '👀 Maintain good posture and confidence',
            '🔄 Practise regularly for best results',
          ].map((tip, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
