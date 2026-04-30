import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import AudioRecorder from '../components/AudioRecorder.jsx'
import passages from '../data/passages.js'
import { getReadingFeedback } from '../services/openaiService.js'

function ReadingAloud() {
  const { state, dispatch } = useApp()
  const navigate = useNavigate()
  const [transcript, setTranscript] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasRecorded, setHasRecorded] = useState(false)

  const levelPassages = passages.filter((p) => p.level === state.level)
  const allPassages = levelPassages.length > 0 ? levelPassages : passages

  const passage = useMemo(() => {
    return allPassages[Math.floor(Math.random() * allPassages.length)]
  }, [state.level])

  const handleTranscriptChange = useCallback((t) => {
    setTranscript(t)
  }, [])

  const handleRecordingComplete = useCallback((t) => {
    if (t) setHasRecorded(true)
  }, [])

  const handleGetFeedback = async () => {
    if (!transcript.trim()) {
      setError('Please record your reading first!')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const feedback = await getReadingFeedback(passage.text, transcript, state.level)
      dispatch({
        type: 'SET_FEEDBACK',
        payload: {
          type: 'reading',
          feedback,
          passage,
          transcript,
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
        <span className="text-3xl">📖</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reading Aloud</h1>
          <p className="text-gray-500 text-sm">Read the passage below clearly and expressively</p>
        </div>
      </div>

      {/* Level badge */}
      <div className="flex gap-2">
        <span className="bg-primary-100 text-primary-500 px-3 py-1 rounded-full text-sm font-semibold">{passage.level}</span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{passage.topic}</span>
      </div>

      {/* Passage */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{passage.title}</h2>
        <p className="text-gray-700 leading-relaxed text-base">{passage.text}</p>
      </div>

      {/* Tips */}
      <div className="bg-mint-50 border border-mint-100 rounded-xl p-4">
        <p className="text-mint-400 text-sm font-medium">💡 Tips: Read at a comfortable pace. Pause at punctuation marks. Use expression to bring the text to life!</p>
      </div>

      {/* Recorder */}
      <AudioRecorder
        onTranscriptChange={handleTranscriptChange}
        onRecordingComplete={handleRecordingComplete}
      />

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-700 text-sm">{error}</div>
      )}

      {/* Submit */}
      <button
        onClick={handleGetFeedback}
        disabled={isLoading || !transcript.trim()}
        className="w-full py-4 bg-primary-400 text-white rounded-xl font-bold text-lg hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Analysing your reading...
          </span>
        ) : (
          '🤖 Get AI Feedback'
        )}
      </button>
    </div>
  )
}

export default ReadingAloud
