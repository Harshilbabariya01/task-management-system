import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducer";
import { projectReducer } from "./projectReducer";
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
    employee: employeeReducer,
    project: projectReducer,
    task: taskReducer
});

export default rootReducer;