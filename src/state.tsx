import React, { createContext, useReducer } from 'react'

interface State {
  selectedValue: string
  matrix: object[]
}

interface Action {
  type: string
  value?: number
}

interface ContextProps {
  state: State
  dispatch: ({ type, value }: { type: string; value?: number }) => void
}

const initialState = {
  selectedValue: '',
  matrix: [],
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'nought':
      return {
        ...state,
        selectedValue: 'nought',
      }
    case 'cross':
      return {
        ...state,
        selectedValue: 'cross',
      }
    case 'update': {
      return {
        ...state,
        matrix: [
          ...state.matrix,
          {
            position: action.value,
            value: state.selectedValue,
          },
        ],
      }
    }
    default:
      return state
  }
}

export const StateContext = createContext({} as ContextProps)

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
}
