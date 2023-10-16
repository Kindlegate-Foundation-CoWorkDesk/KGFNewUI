import React, {createContext, useReducer, useContext, ReactNode, Dispatch} from "react";

// Define the initial state and action types
type GlobalState = {
    counter: number;
    heroTitle: string;
    heroContent: string;
// Your initial state properties here
};

type GlobalAction = 
| {type: 'SET_SOMETHING'; payload: any}
| {type: 'RESET_SOMETHING'}
| {type: 'INCREMENT_COUNTER'}
| {type: 'NAVIGATION_ITEM_CHANGED'; payload: {heroTitle: string; heroContent: string}};

const initialState: GlobalState = {
// Your initial state properties here
    counter: 10,
    heroTitle: '',
    heroContent: ''
};

const GlobalContext = createContext<{
    state: GlobalState;
    dispatch: Dispatch<GlobalAction>;
} | undefined>(undefined);

const reducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch(action.type) {
        case 'SET_SOMETHING':
            // Handle the action to update state and return a new state
            return {...state, /* update state here */};
        case 'RESET_SOMETHING':
            // Handle another action
            return {...state, /* update state here */};
        case 'INCREMENT_COUNTER':
            return {...state, counter: state.counter + 1};
        case 'NAVIGATION_ITEM_CHANGED':
            return {...state, heroTitle: action.payload.heroTitle, heroContent: action.payload.heroContent };
        default:
            return state;
    }
};
  
const GlobalProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error ('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}

export{GlobalProvider, useGlobalContext}