import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, FETCH_PROJECT } from "../types/projectType";

const initialState = {
    project: []
};

export const projectReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_PROJECT:
            return { ...state, project: action.payload };
        case ADD_PROJECT:
            return { ...state, project: action.payload };
        case EDIT_PROJECT:
            return { ...state, project: action.payload };
        case DELETE_PROJECT:
            return { ...state }
        default:
            return state;
    }
};