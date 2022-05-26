import { ADD_TASK, DELETE_TASK, EDIT_TASK, FETCH_TASK } from "../types/taskType";

const initialState = {
    task: []
};

export const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TASK:
            return { ...state, task: action.payload };
        case ADD_TASK:
            return { ...state, task: action.payload };
        case EDIT_TASK:
            return { ...state, task: action.payload };
        case DELETE_TASK:
            return { ...state }
        default:
            return state;
    }
};