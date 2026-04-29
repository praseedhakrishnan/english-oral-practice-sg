# English Oral Practice SG 🇸🇬

A web application to help Singapore primary school students practise for the PSLE English Oral examination with AI-powered feedback.

## Features

- 📖 **Reading Aloud** — Read PSLE-style passages and receive AI feedback on pronunciation, fluency, expression, and pace
- 🎤 **Stimulus-Based Conversation (SBC)** — Practise answering examiner questions with AI evaluation
- 🤖 **AI Feedback** — Powered by OpenAI GPT-4o with Singapore PSLE oral standards
- 🌟 **Model Answers** — Listen to model answers with text-to-speech
- 📊 **Progress Tracking** — Track improvement over time with charts and badges
- 🎓 **Level Selection** — P4, P5, P6 differentiated content
- 📱 **Mobile Responsive** — Works on phones, tablets, and desktops
- 🔌 **Demo Mode** — Works without an API key using realistic sample feedback

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/praseedhakrishnan/english-oral-practice-sg.git
cd english-oral-practice-sg
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional — for real AI feedback):
```bash
cp .env.example .env
```
Edit `.env` and add your OpenAI API key:
```
VITE_OPENAI_API_KEY=sk-your-key-here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

## Getting an OpenAI API Key

1. Go to [https://platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new key
5. Add it to your `.env` file

> **Note:** The app works in demo mode without an API key, using pre-written sample feedback.

## PSLE English Oral Exam Format

The Singapore PSLE English Oral exam has two components:

| Component | Description | Marks |
|-----------|-------------|-------|
| Reading Aloud | Students read a passage aloud | 10 marks |
| Stimulus-Based Conversation | Students discuss a visual stimulus with the examiner | 10 marks |

**Marking criteria:**
- **Reading Aloud:** Pronunciation, fluency, expression, pace
- **SBC:** Vocabulary, relevance, elaboration, confidence

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v6 | Navigation |
| Web Speech API | Speech recognition |
| Speech Synthesis API | Text-to-speech |
| OpenAI GPT-4o | AI feedback |
| localStorage | Progress persistence |

## Future Roadmap

- [ ] User accounts and cloud sync
- [ ] Real audio recording with waveform visualisation
- [ ] More passages and stimuli
- [ ] Parent/teacher dashboard
- [ ] Offline PWA support
- [ ] Peer comparison features

## License

MIT License — see LICENSE file for details.
