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
        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold text-yellow-800">Demo Mode</p>
            <p className="text-yellow-700 text-sm">No API key detected. The app will use sample feedback. Add your OpenAI API key in a <code className="bg-yellow-100 px-1 rounded">.env</code> file to enable real AI feedback.</p>
          </div>
        </div>
      )}

      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <img
          src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"
          alt="Singapore skyline"
          className="w-full h-52 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 via-primary-500/40 to-transparent" />
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
