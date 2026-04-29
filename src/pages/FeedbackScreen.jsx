import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import ScoreCard from '../components/ScoreCard.jsx'
import FeedbackPanel from '../components/FeedbackPanel.jsx'
import ModelAnswer from '../components/ModelAnswer.jsx'
import { getModelAnswer } from '../services/openaiService.js'

function FeedbackScreen() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const feedbackData = state.lastFeedback
  const [modelAnswer, setModelAnswer] = useState(null)
  const [loadingModel, setLoadingModel] = useState(false)
  const [sessionSaved, setSessionSaved] = useState(false)

  useEffect(() => {
    if (!feedbackData) {
      navigate('/')
      return
    }

    if (!sessionSaved) {
      dispatch({
        type: 'ADD_SESSION',
        payload: {
          date: new Date().toISOString(),
          type: feedbackData.type,
          title: feedbackData.type === 'reading'
            ? feedbackData.passage?.title
            : feedbackData.stimulus?.title,
          score: feedbackData.feedback?.overallScore || 0,
          level: state.level,
        },
      })
      setSessionSaved(true)
    }
  }, [feedbackData, sessionSaved])

  const handleGetModelAnswer = async () => {
    const question = feedbackData?.type === 'sbc'
      ? feedbackData.questions?.[0]
      : `How would you read this passage aloud: "${feedbackData?.passage?.title}"`

    setLoadingModel(true)
    try {
      const answer = await getModelAnswer(question, state.level)
      setModelAnswer(answer)
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingModel(false)
    }
  }

  if (!feedbackData) return null

  const { feedback, type } = feedbackData
  const breakdown = type === 'reading'
    ? { Pronunciation: feedback.pronunciation, Fluency: feedback.fluency, Expression: feedback.expression, Pace: feedback.pace }
    : { Vocabulary: feedback.vocabulary, Relevance: feedback.relevance, Elaboration: feedback.elaboration, Confidence: feedback.confidence }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="text-3xl">📊</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Your Results</h1>
          <p className="text-gray-500 text-sm">
            {type === 'reading' ? feedbackData.passage?.title : feedbackData.stimulus?.title}
          </p>
        </div>
      </div>

      {/* Score card */}
      <ScoreCard
        score={feedback.overallScore}
        title="Overall Score"
        breakdown={breakdown}
      />

      {/* Feedback panel */}
      <FeedbackPanel feedback={feedback} type={type} />

      {/* Model answer */}
      {!modelAnswer ? (
        <button
          onClick={handleGetModelAnswer}
          disabled={loadingModel}
          className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 disabled:opacity-50 transition-all"
        >
          {loadingModel ? '⏳ Loading model answer...' : '🌟 Show Model Answer'}
        </button>
      ) : (
        <ModelAnswer
          answer={modelAnswer}
          question={type === 'sbc' ? feedbackData.questions?.[0] : ''}
        />
      )}

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          to={type === 'reading' ? '/reading' : '/sbc'}
          className="py-3 bg-red-600 text-white rounded-xl font-semibold text-center hover:bg-red-700 transition-all"
        >
          🔄 Try Again
        </Link>
        <Link
          to="/"
          className="py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold text-center hover:bg-gray-200 transition-all"
        >
          🏠 Home
        </Link>
      </div>

      <Link
        to="/progress"
        className="block text-center text-red-600 text-sm font-medium hover:underline"
      >
        📊 View all my progress →
      </Link>
    </div>
  )
}

export default FeedbackScreen
