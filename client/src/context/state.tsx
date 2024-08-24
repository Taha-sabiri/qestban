"use client";

import { object } from "prop-types";
import React, { Dispatch, createContext, useReducer } from "react";


export const ActionType = {
    "SET_CARD_DATA": "SET_CARD_DATA",
    "CLEAR_CARD_DATA": "CLEAR_CARD_DATA"
}

type StateType = {
    cardData: object | null;
};

type ActionType = {
    type: string;
    payload?: any;
};

const initialState: StateType = {
    cardData: object
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {

        case ActionType.SET_CARD_DATA:
            return { ...state, cardData: action.payload };

        case ActionType.CLEAR_CARD_DATA:
            return { ...state, cardData: null };


        default:
            return state;
    }
};

export const AppContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const AppContextWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};



