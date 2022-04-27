import React, { useReducer } from 'react';
import reducer from "./reducer";
import context from "./context";
import initialState from "./initialState";
import { MODAL_CLOSE, MODAL_OPEN } from "./constants";

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        state,
        modalOpen: () => dispatch({type: MODAL_OPEN}),
        modalClose: () => dispatch({type: MODAL_CLOSE})
    };

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export default Provider;
