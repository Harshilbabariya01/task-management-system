import axios from "axios";
import { TASK_API } from "../../constants/constant";
import { ADD_TASK, DELETE_TASK, EDIT_TASK, FETCH_TASK } from "../types/taskType";

//get all the task data
export const fetchTask = (data: any) => {
    return {
        type: FETCH_TASK,
        payload: data
    }
};

//add new task 
export const addTask = (data: any) => {
    return {
        type: ADD_TASK,
        payload: data
    }
};

//edit or update the data
export const editTask = (data: any) => {
    return {
        type: EDIT_TASK,
        payload: data
    }
};

//delete the data 
export const deleteTask = (data: any) => {
    return {
        type: DELETE_TASK,
        payload: data
    }
};

//fetch the data from db.json
export const fetchTaskData = () => {
    return ((dispatch: any) => {
        axios
            .get(TASK_API)
            .then(response => {
                dispatch(fetchTask(response.data))
            })
            .catch(error => console.log(error))
    })
};

//add new data to the list
export const addTaskData = (data: any) => {
    return ((dispatch: any) => {
        axios
            .post(TASK_API, data)
    })
};

//edit the existing task data
export const editTaskData = (id: any, data: any) => {
    return ((dispatch: any) => {
        axios
            .put(`${TASK_API}/${id}`, data);
    })
};

//delete perticular data from the list
export const deleteTaskData = (id: number, data: any) => {
    return ((dispatch: any) => {
        axios
            .delete(`${TASK_API}/${id}`, data)
    })
};

//sort the data by value
export const sortTaskData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${TASK_API}?_sort=${value}`)
            .then(response => {
                dispatch(fetchTask(response.data))
            })
            .catch(error => console.log(error))
    })
};

//filter the data by title
export const filterTaskTitleData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(TASK_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.title.toLowerCase().includes(value))
                dispatch(fetchTask(data))
            })
    })
};

//filter the data by incharge person name
export const filterTaskInchargeData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(TASK_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.incharge.toLowerCase().includes(value))
                dispatch(fetchTask(data))
            })
    })
};

//fetch the not-completed task data
export const fetchNotCompletedData = () => {
    return ((dispatch: any) => {
        axios
        .get(`${TASK_API}?status=Pending&status=InProgress&status=Cancelled&status=On%20Hold`)
        .then(response => {
            dispatch(fetchTask(response.data))
        })
        .catch(error => console.log(error))
    })
};

//sort the not-completed task data
export const sortNotCompletedTaskData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${TASK_API}?status=Pending&status=InProgress&status=Cancelled&status=On%20Hold&_sort=${value}`)
            .then(response => {
                dispatch(fetchTask(response.data))
            })
            .catch(error => console.log(error))
    })
};

//filter the not-completed task data by title
export const filterNotCompletedTaskTitleData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${TASK_API}?status=Pending&status=InProgress&status=Cancelled&status=On%20Hold`)
            .then(response => {
                const data = response.data.filter((item: any) => item.title.toLowerCase().includes(value))
                dispatch(fetchTask(data))
            })
    })
};

//filter the not-completed task data by incharge person
export const filterNotCompletedTaskInchargeData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${TASK_API}?status=Pending&status=InProgress&status=Cancelled&status=On%20Hold`)
            .then(response => {
                const data = response.data.filter((item: any) => item.incharge.toLowerCase().includes(value))
                dispatch(fetchTask(data))
            })
    })
};
