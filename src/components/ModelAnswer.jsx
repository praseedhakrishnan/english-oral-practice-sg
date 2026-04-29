import { useTextToSpeech } from '../hooks/useTextToSpeech.js'

function ModelAnswer({ answer, question = '' }) {
  const { speak, stop, isSpeaking, isSupported } = useTextToSpeech()

  if (!answer) return null

  return (
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-purple-800">🌟 Model Answer</h3>
        {isSupported && (
          <button
            onClick={() => (isSpeaking ? stop() : speak(answer))}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              isSpeaking
                ? 'bg-purple-600 text-white animate-pulse'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {isSpeaking ? (
              <>
                <span className="animate-bounce">🔊</span> Stop
              </>
            ) : (
              <>
                <span>🔈</span> Listen
              </>
            )}
          </button>
        )}
      </div>
      {question && (
        <p className="text-xs text-purple-600 mb-2 font-medium">Q: {question}</p>
      )}
      <p className="text-purple-700 text-sm leading-relaxed">{answer}</p>
    </div>
  )
}

export default ModelAnswer
