export function calculateOverallScore(scores) {
  const values = Object.values(scores).filter((v) => typeof v === 'number')
  if (!values.length) return 0
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length
  return Math.round(avg)
}

export function getScoreLabel(score) {
  if (score >= 17) return 'Excellent'
  if (score >= 13) return 'Good'
  if (score >= 9) return 'Developing'
  return 'Needs Practice'
}

export function getScoreColor(score) {
  if (score >= 17) return 'text-green-600'
  if (score >= 13) return 'text-blue-600'
  if (score >= 9) return 'text-yellow-600'
  return 'text-red-600'
}

export function getScoreBgColor(score) {
  if (score >= 17) return 'bg-green-100'
  if (score >= 13) return 'bg-blue-100'
  if (score >= 9) return 'bg-yellow-100'
  return 'bg-red-100'
}

export function getBarColor(score) {
  if (score >= 17) return 'bg-green-500'
  if (score >= 13) return 'bg-blue-500'
  if (score >= 9) return 'bg-yellow-500'
  return 'bg-red-500'
}

export function formatDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString('en-SG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function getBadges(sessions) {
  const badges = []

  if (sessions.length >= 1) badges.push({ id: 'first', emoji: '🎯', label: 'First Practice', desc: 'Completed your first practice session!' })
  if (sessions.length >= 5) badges.push({ id: 'five', emoji: '🔥', label: 'On a Roll', desc: 'Completed 5 practice sessions!' })
  if (sessions.length >= 10) badges.push({ id: 'ten', emoji: '🏆', label: 'Dedicated Learner', desc: 'Completed 10 practice sessions!' })

  const readingSessions = sessions.filter((s) => s.type === 'reading')
  const sbcSessions = sessions.filter((s) => s.type === 'sbc')

  if (readingSessions.length >= 3) badges.push({ id: 'reader', emoji: '📖', label: 'Bookworm', desc: 'Completed 3 Reading Aloud sessions!' })
  if (sbcSessions.length >= 3) badges.push({ id: 'speaker', emoji: '🎤', label: 'Confident Speaker', desc: 'Completed 3 SBC sessions!' })

  const highScores = sessions.filter((s) => s.score >= 17)
  if (highScores.length >= 1) badges.push({ id: 'excellent', emoji: '⭐', label: 'Star Performer', desc: 'Achieved an Excellent score!' })

  const allScores = sessions.map((s) => s.score)
  if (allScores.length >= 3) {
    const recent = allScores.slice(-3)
    if (recent[2] > recent[0]) badges.push({ id: 'improving', emoji: '📈', label: 'Improving', desc: 'Your scores are improving!' })
  }

  return badges
}
