import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ReadingAloud from './pages/ReadingAloud.jsx'
import StimulusConversation from './pages/StimulusConversation.jsx'
import FeedbackScreen from './pages/FeedbackScreen.jsx'
import ProgressDashboard from './pages/ProgressDashboard.jsx'

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6 max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<ReadingAloud />} />
            <Route path="/sbc" element={<StimulusConversation />} />
            <Route path="/feedback" element={<FeedbackScreen />} />
            <Route path="/progress" element={<ProgressDashboard />} />
          </Routes>
        </main>
      </div>
    </AppProvider>
  )
}

export default App
