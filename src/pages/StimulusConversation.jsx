import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import AudioRecorder from '../components/AudioRecorder.jsx'
import stimuli from '../data/stimuli.js'
import { getSBCFeedback } from '../services/openaiService.js'

function StimulusConversation() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentTranscript, setCurrentTranscript] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const levelStimuli = stimuli.filter((s) => s.level === state.level)
  const allStimuli = levelStimuli.length > 0 ? levelStimuli : stimuli

  const stimulus = useMemo(() => {
    setImageLoaded(false)
    setImageError(false)
    return allStimuli[Math.floor(Math.random() * allStimuli.length)]
  }, [state.level])

  const totalQuestions = stimulus.questions.length
  const isLastQuestion = currentQ === totalQuestions - 1

  const handleTranscriptChange = useCallback((t) => {
    setCurrentTranscript(t)
  }, [])

  const handleNext = () => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQ] = currentTranscript
    setAnswers(updatedAnswers)
    setCurrentTranscript('')
    setCurrentQ((q) => q + 1)
    setError(null)
  }

  const handleFinish = async () => {
    if (!currentTranscript.trim() && !answers[currentQ]) {
      setError('Please record your answer first!')
      return
    }

    const finalAnswers = [...answers]
    finalAnswers[currentQ] = currentTranscript

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
        },
      })
      navigate('/feedback')
    } catch (err) {
      setError('Failed to get feedback. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

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

        {/* Real image with loading/error states */}
        {stimulus.imageUrl && (
          <div className="mb-4">
            {!imageLoaded && !imageError && (
              <div className="w-full bg-gray-200 rounded-xl animate-pulse flex items-center justify-center" style={{ aspectRatio: '16/9', maxHeight: '350px' }}>
                <span className="text-gray-400 text-4xl">🖼️</span>
              </div>
            )}
            {imageError && (
              <div className="w-full bg-primary-50 rounded-xl flex flex-col items-center justify-center gap-2" style={{ aspectRatio: '16/9', maxHeight: '350px' }}>
                <span className="text-6xl">🎭</span>
                <p className="text-primary-400 text-sm font-medium">Visual Stimulus</p>
              </div>
            )}
            <img
              src={stimulus.imageUrl}
              alt={stimulus.imageDescription}
              className={`w-full rounded-xl object-cover shadow-md transition-opacity duration-300 ${imageLoaded ? 'block opacity-100' : 'hidden opacity-0'}`}
              style={{ maxHeight: '350px' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => { setImageError(true); setImageLoaded(false) }}
            />
          </div>
        )}

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

      {/* Previous answers */}
      {answers.length > 0 && (
        <div className="space-y-2">
          {answers.map((ans, i) => ans && (
            <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p className="text-xs text-gray-400 font-medium mb-1">Q{i + 1}: {stimulus.questions[i]}</p>
              <p className="text-sm text-gray-600">{ans}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="bg-mint-50 border border-mint-100 rounded-xl p-3">
        <p className="text-mint-400 text-sm">💡 Tip: Give a complete answer! Share your opinion and support it with reasons or examples.</p>
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

      {/* Navigation */}
      {!isLastQuestion ? (
        <button
          onClick={handleNext}
          disabled={!currentTranscript.trim()}
          className="w-full py-4 bg-primary-400 text-white rounded-xl font-bold text-lg hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
        >
          Next Question →
        </button>
      ) : (
        <button
          onClick={handleFinish}
          disabled={isLoading || (!currentTranscript.trim() && !answers[currentQ])}
          className="w-full py-4 bg-coral-300 text-white rounded-xl font-bold text-lg hover:bg-coral-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Analysing your answers...
            </span>
          ) : (
            '🤖 Finish & Get Feedback'
          )}
        </button>
      )}
    </div>
  )
}

export default StimulusConversation
