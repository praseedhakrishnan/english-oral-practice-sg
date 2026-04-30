const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
const isDemoMode = !API_KEY || API_KEY === 'your_openai_api_key_here'

const mockReadingFeedback = {
  overallScore: 14,
  pronunciation: 13,
  fluency: 15,
  expression: 14,
  pace: 14,
  feedback:
    "Great effort on your reading! You read the passage with good energy and showed understanding of the text. Your pronunciation of most words was clear, and you maintained a generally comfortable pace. To improve further, try to vary your tone and expression more — especially when reading sentences that show emotions or important ideas. Pausing slightly at punctuation marks like commas and full stops will also help your reading sound more natural and polished.",
  strengths: [
    "Good overall pace — not too fast or too slow",
    "Clear pronunciation of most words",
    "Showed confidence while reading",
  ],
  improvements: [
    "Try to vary your tone to make the reading more expressive",
    "Pause at commas and full stops for better flow",
    "Practise pronouncing longer words by breaking them into syllables",
  ],
}

const mockSBCFeedback = {
  overallScore: 14,
  criteria: [
    { name: "Relevance", score: 4, maxScore: 5, comment: "Your answer addressed the question well. Try to stay more focused on the main topic." },
    { name: "Vocabulary", score: 3, maxScore: 5, comment: "Good use of everyday words. Try to include more varied vocabulary like 'reduce', 'conserve', 'initiative'." },
    { name: "Elaboration", score: 4, maxScore: 5, comment: "You gave some examples. Adding more specific details or personal experiences would strengthen your answer." },
    { name: "Confidence", score: 3, maxScore: 5, comment: "Speak clearly and at a steady pace. Avoid filler words like 'um' and 'uh'." },
  ],
  vocabulary: 14,
  relevance: 15,
  elaboration: 14,
  confidence: 13,
  feedback:
    "Well done on your Stimulus-Based Conversation! You gave relevant and thoughtful answers to the questions. Your responses showed that you were engaged with the topic and had your own opinions. You used a good variety of vocabulary. To score even higher, try to elaborate more on your answers — give examples from your own life or explain your reasons in more detail. Speak with confidence and maintain good eye contact (even in practice, imagine looking at the examiner).",
  modelAnswer:
    "I think one effective way to address this issue is to plan carefully and be more mindful of our choices. For example, families can work together to reduce waste and make better decisions. In Singapore, we can see how community efforts make a real difference when everyone plays their part. By being responsible and thoughtful, we can all contribute positively. Personally, I believe that even small actions, done consistently, can lead to meaningful change over time.",
  generalFeedback:
    "Great effort! You shared some good ideas. Remember to elaborate more and use varied vocabulary to impress the examiner.",
  strengths: [
    "Answers were relevant to the questions asked",
    "Good use of vocabulary and sentence structure",
    "Showed personal opinions and perspective",
  ],
  improvements: [
    "Elaborate more with specific examples or personal experiences",
    "Use a wider range of vocabulary to express your ideas",
    "Try to organise your thoughts before answering each question",
  ],
}

async function getReadingFeedback(originalPassage, transcript, level) {
  if (isDemoMode) {
    await new Promise((r) => setTimeout(r, 1500))
    return mockReadingFeedback
  }

  try {
    const prompt = `You are an experienced Singapore PSLE English oral examiner. A ${level} student has just read the following passage aloud.

ORIGINAL PASSAGE:
"${originalPassage}"

STUDENT'S SPEECH-TO-TEXT TRANSCRIPT:
"${transcript}"

Please evaluate the student's reading based on Singapore PSLE oral examination criteria and provide feedback in the following JSON format:
{
  "overallScore": <number 0-20>,
  "pronunciation": <number 0-20>,
  "fluency": <number 0-20>,
  "expression": <number 0-20>,
  "pace": <number 0-20>,
  "feedback": "<2-3 sentences of encouraging, constructive overall feedback>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"]
}

Keep feedback encouraging and age-appropriate for a primary school student. Scores should be realistic — most students score between 10-18.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return JSON.parse(data.choices[0].message.content)
  } catch (err) {
    console.error('Reading feedback API error, using mock feedback:', err)
    return mockReadingFeedback
  }
}

async function getSBCFeedback(questions, answers, level) {
  if (isDemoMode) {
    await new Promise((r) => setTimeout(r, 1500))
    return mockSBCFeedback
  }

  try {
    const qa = questions.map((q, i) => `Q${i + 1}: ${q}\nA${i + 1}: ${answers[i] || '(no answer)'}`).join('\n\n')

    const prompt = `You are an experienced Singapore PSLE English oral examiner. A ${level} student has just completed a Stimulus-Based Conversation (SBC).

QUESTIONS AND STUDENT ANSWERS:
${qa}

Please evaluate the student's performance based on Singapore PSLE SBC criteria and provide feedback in the following JSON format:
{
  "overallScore": <number 0-20>,
  "criteria": [
    { "name": "Relevance", "score": <0-5>, "maxScore": 5, "comment": "<specific feedback>" },
    { "name": "Vocabulary", "score": <0-5>, "maxScore": 5, "comment": "<specific feedback>" },
    { "name": "Elaboration", "score": <0-5>, "maxScore": 5, "comment": "<specific feedback>" },
    { "name": "Confidence", "score": <0-5>, "maxScore": 5, "comment": "<specific feedback>" }
  ],
  "vocabulary": <number 0-20>,
  "relevance": <number 0-20>,
  "elaboration": <number 0-20>,
  "confidence": <number 0-20>,
  "feedback": "<2-3 sentences of encouraging, constructive overall feedback>",
  "modelAnswer": "<a PSLE-appropriate model answer for the main question>",
  "generalFeedback": "<one encouraging sentence summarising the performance>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"]
}

Keep feedback encouraging and age-appropriate for a primary school student. Scores should be realistic — most students score between 10-18.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return JSON.parse(data.choices[0].message.content)
  } catch (err) {
    console.error('SBC feedback API error, using mock feedback:', err)
    return mockSBCFeedback
  }
}

async function getModelAnswer(question, level) {
  const mockAnswer = `In my opinion, this is an important topic that affects many people. I think that we should all try our best to understand different perspectives and work together to find solutions. For example, in Singapore, we can see how people come together as a community to tackle challenges. By being responsible, kind, and thoughtful, we can all make a positive difference. Personally, I believe that every individual has a role to play, and even small actions can lead to big changes over time.`

  if (isDemoMode) {
    await new Promise((r) => setTimeout(r, 1000))
    return mockAnswer
  }

  try {
    const prompt = `You are helping a Singapore primary school student (${level}) prepare for the PSLE English oral examination. 

Please provide a model answer for the following SBC question:
"${question}"

The answer should:
- Be approximately 5-8 sentences long
- Use vocabulary appropriate for a ${level} student but slightly above average
- Include a personal opinion with reasoning
- Give at least one specific example
- Sound natural when spoken aloud
- Be encouraging and positive in tone

Provide only the model answer text, no additional commentary.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (err) {
    console.error('Model answer API error, using mock answer:', err)
    return mockAnswer
  }
}

export { getReadingFeedback, getSBCFeedback, getModelAnswer, isDemoMode }
