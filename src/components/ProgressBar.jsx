function ProgressBar({ value = 0, color = 'bg-red-500', label = '', showPercent = true }) {
  const pct = Math.min(100, Math.max(0, (value / 20) * 100))

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between mb-1 text-sm">
          {label && <span className="font-medium text-gray-700">{label}</span>}
          {showPercent && <span className="text-gray-500">{value}/20</span>}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-700 ease-out ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
