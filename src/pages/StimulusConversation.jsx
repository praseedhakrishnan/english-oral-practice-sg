import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import AudioRecorder from '../components/AudioRecorder.jsx'
import PerQuestionFeedback from '../components/PerQuestionFeedback.jsx'
import stimuli from '../data/stimuli.js'
import { getSBCFeedback, getSingleQuestionFeedback } from '../services/openaiService.js'

const ILLUSTRATION_EMOJI = {
  social_media: '📱',
  healthy_living: '🏃',
  environment: '🌿',
  community: '🤝',
  technology: '💻',
  family: '👨‍👩‍👧‍👦',
  school: '🏫',
  food_waste: '🍽️',
  mental_health: '💚',
  multicultural: '🇸🇬',
}

function StimulusConversation() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentTranscript, setCurrentTranscript] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // 'recording' | 'feedback' | 'summary'
  const [questionState, setQuestionState] = useState('recording')
  const [perQuestionFeedbacks, setPerQuestionFeedbacks] = useState([])
  const [currentFeedback, setCurrentFeedback] = useState(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const levelStimuli = stimuli.filter((s) => s.level === state.level)
  const allStimuli = levelStimuli.length > 0 ? levelStimuli : stimuli

  const stimulus = useMemo(() => {
    return allStimuli[Math.floor(Math.random() * allStimuli.length)]
  }, [state.level])

  const totalQuestions = stimulus.questions.length
  const isLastQuestion = currentQ === totalQuestions - 1

  const handleTranscriptChange = useCallback((t) => {
    setCurrentTranscript(t)
  }, [])

  const handleSubmitAnswer = async () => {
    const answer = currentTranscript.trim() || answers[currentQ] || ''
    if (!answer) {
      setError('Please record your answer first!')
      return
    }

    const updatedAnswers = [...answers]
    updatedAnswers[currentQ] = answer
    setAnswers(updatedAnswers)

    setIsLoading(true)
    setError(null)

    try {
      const feedback = await getSingleQuestionFeedback(
        stimulus.questions[currentQ],
        answer,
        state.level
      )
      const updatedFeedbacks = [...perQuestionFeedbacks]
      updatedFeedbacks[currentQ] = feedback
      setPerQuestionFeedbacks(updatedFeedbacks)
      setCurrentFeedback(feedback)
      setQuestionState('feedback')
    } catch (err) {
      setError('Failed to get feedback. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNextAfterFeedback = async () => {
    if (isLastQuestion) {
      // All questions done — generate overall summary and navigate
      const finalAnswers = [...answers]
      setIsLoading(true)
      setError(null)
      try {
        const feedback = await getSBCFeedback(stimulus.questions, finalAnswers, state.level)
        dispatch({
          type: 'SET_FEEDBACK',
          payload: {
            type: 'sbc',
            feedback,
            stimulus,
            questions: stimulus.questions,
            answers: finalAnswers,
            perQuestionFeedbacks: [...perQuestionFeedbacks],
          },
        })
        navigate('/feedback')
      } catch (err) {
        setError('Failed to get summary feedback. Please try again.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    } else {
      setCurrentQ((q) => q + 1)
      setCurrentTranscript('')
      setCurrentFeedback(null)
      setQuestionState('recording')
      setError(null)
    }
  }

  // ── Per-question feedback view ──────────────────────────────────────────────
  if (questionState === 'feedback' && currentFeedback) {
    return (
      <PerQuestionFeedback
        question={stimulus.questions[currentQ]}
        transcript={answers[currentQ]}
        feedback={currentFeedback}
        onNext={isLoading ? undefined : handleNextAfterFeedback}
        isLast={isLastQuestion}
      />
    )
  }

  // ── Recording / question view ───────────────────────────────────────────────
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🎤</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Stimulus-Based Conversation</h1>
          <p className="text-gray-500 text-sm">Answer the examiner's questions based on the scenario</p>
        </div>
      </div>

      {/* Stimulus card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md">
        <div className="flex items-start gap-3 mb-3">
          <span className="bg-primary-100 text-primary-500 px-3 py-1 rounded-full text-sm font-semibold">{stimulus.level}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">{stimulus.title}</h2>

        {/* Pexels Image */}
        <div className="mb-4 relative">
          {!imgLoaded && !imgError && (
            <div className="w-full max-h-72 h-48 bg-gray-200 rounded-2xl animate-pulse" />
          )}
          {!imgError && stimulus.imageUrl && (
            <img
              src={stimulus.imageUrl}
              alt={`Visual stimulus: ${stimulus.title}`}
              crossOrigin="anonymous"
              className={`rounded-2xl object-cover max-h-72 w-full shadow-md transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => { setImgError(true); setImgLoaded(false) }}
            />
          )}
          {imgError && (
            <div className="w-full h-40 rounded-2xl bg-primary-50 border border-primary-100 flex flex-col items-center justify-center gap-2">
              <span className="text-5xl">{ILLUSTRATION_EMOJI[stimulus.illustrationType] || '🖼️'}</span>
              <p className="text-primary-500 font-semibold text-sm text-center">{stimulus.title}</p>
            </div>
          )}
        </div>

        {/* Image description */}
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-3">
          <p className="text-xs text-primary-400 uppercase tracking-wide font-medium mb-1">Visual Stimulus Description</p>
          <p className="text-gray-600 text-sm">{stimulus.imageDescription}</p>
        </div>

        <p className="text-gray-600 text-sm">{stimulus.description}</p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          Question {currentQ + 1} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {stimulus.questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-colors ${
                i < currentQ ? 'bg-mint-300' : i === currentQ ? 'bg-primary-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current question */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
        <p className="text-xs text-primary-400 font-semibold uppercase tracking-wide mb-1">Examiner's Question</p>
        <p className="text-gray-800 font-medium text-lg">{stimulus.questions[currentQ]}</p>
      </div>

      {/* Tips */}
      <div className="bg-mint-50 border border-mint-100 rounded-xl p-3">
        <p className="text-mint-400 text-sm">💡 Tip: Use the SEES strategy — <strong>S</strong>tate your point, <strong>E</strong>laborate, give an <strong>E</strong>xample, then <strong>S</strong>tate again!</p>
      </div>

      {/* Recorder */}
      <AudioRecorder
        key={currentQ}
        onTranscriptChange={handleTranscriptChange}
        onRecordingComplete={() => {}}
      />

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">{error}</div>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmitAnswer}
        disabled={isLoading || (!currentTranscript.trim() && !answers[currentQ])}
        className="w-full py-4 bg-coral-300 text-white rounded-xl font-bold text-lg hover:bg-coral-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Getting feedback...
          </span>
        ) : (
          '🤖 Submit Answer'
        )}
      </button>
    </div>
  )
}

export default StimulusConversation

