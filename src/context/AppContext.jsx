import { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext(null)

const initialState = {
  level: 'P5',
  lastFeedback: null,
  sessions: JSON.parse(localStorage.getItem('oral_sessions') || '[]'),
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LEVEL':
      return { ...state, level: action.payload }
    case 'SET_FEEDBACK':
      return { ...state, lastFeedback: action.payload }
    case 'ADD_SESSION':
      return { ...state, sessions: [...state.sessions, action.payload] }
    case 'CLEAR_SESSIONS':
      return { ...state, sessions: [] }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('oral_sessions', JSON.stringify(state.sessions))
  }, [state.sessions])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
