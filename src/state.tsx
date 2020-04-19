import React, {
    createContext,
    useReducer
} from 'react';

interface State {
    selectedValue: string,
    isBoxSelected: boolean
}

interface Action {
    type: string
}

interface ContextProps {
    state: State,
    dispatch: ({type}: {type: string}) => void
}

const initialState = {
    selectedValue: '',
    isBoxSelected: false
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'nought':
            return {
                ...state,
                selectedValue: 'nought'
            };
        case 'cross':
            return {
                ...state,
                selectedValue: 'cross'
            }
        default:
            return state;
    }
};

export const StateContext = createContext({} as ContextProps);

export const StateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    );
};
