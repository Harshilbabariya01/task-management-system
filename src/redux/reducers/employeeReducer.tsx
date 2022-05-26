import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEE } from "../types/employeeType";

const initialState = {
    employee: []
};

export const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_EMPLOYEE:
            return { ...state, employee: action.payload };
        case ADD_EMPLOYEE:
            return { ...state, employee: action.payload };
        case EDIT_EMPLOYEE:
            return { ...state, employee: action.payload };
        case DELETE_EMPLOYEE:
            return { ...state }
        default:
            return state;
    }
};