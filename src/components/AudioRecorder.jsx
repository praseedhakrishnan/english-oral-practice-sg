import { useState, useEffect, useRef } from 'react'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition.js'

function AudioRecorder({ onTranscriptChange, onRecordingComplete }) {
  const [duration, setDuration] = useState(0)
  const timerRef = useRef(null)
  const { transcript, interimTranscript, isListening, startListening, stopListening, resetTranscript, isSupported, error } =
    useSpeechRecognition()

  useEffect(() => {
    if (onTranscriptChange) onTranscriptChange(transcript)
  }, [transcript, onTranscriptChange])

  useEffect(() => {
    if (isListening) {
      timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [isListening])

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const handleStart = () => {
    setDuration(0)
    resetTranscript()
    startListening()
  }

  const handleStop = () => {
    stopListening()
    if (onRecordingComplete) onRecordingComplete(transcript)
  }

  if (!isSupported) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
        <p className="text-yellow-700 font-medium">⚠️ Speech recognition is not supported in your browser.</p>
        <p className="text-yellow-600 text-sm mt-1">Please use Chrome or Edge for the best experience.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Mic visual */}
        <div className={`relative flex items-center justify-center w-20 h-20 rounded-full transition-all ${isListening ? 'bg-red-100' : 'bg-gray-100'}`}>
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-red-200 animate-ping opacity-50" />
          )}
          <span className="text-4xl relative z-10">{isListening ? '🎙️' : '🎤'}</span>
        </div>

        {/* Timer */}
        <div className={`text-2xl font-mono font-bold ${isListening ? 'text-red-600' : 'text-gray-400'}`}>
          {formatTime(duration)}
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          {!isListening ? (
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 active:scale-95 transition-all shadow-md"
            >
              🎙️ Start Recording
            </button>
          ) : (
            <button
              onClick={handleStop}
              className="px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 active:scale-95 transition-all shadow-md animate-pulse"
            >
              ⏹️ Stop Recording
            </button>
          )}
          {transcript && !isListening && (
            <button
              onClick={() => { resetTranscript(); setDuration(0) }}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition-all"
            >
              🔄 Reset
            </button>
          )}
        </div>

        {/* Status */}
        {isListening && (
          <p className="text-sm text-red-600 font-medium animate-pulse">● Recording... speak clearly</p>
        )}
        {error && (
          <p className="text-sm text-red-500">Error: {error}. Please try again.</p>
        )}

        {/* Transcript preview */}
        {(transcript || interimTranscript) && (
          <div className="w-full mt-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wide">Your speech:</p>
            <p className="text-sm text-gray-700 leading-relaxed">{transcript}</p>
            {interimTranscript && (
              <p className="text-sm text-gray-400 leading-relaxed italic">{interimTranscript}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AudioRecorder
