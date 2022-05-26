import axios from "axios";
import { PROJECT_API } from "../../constants/constant";
import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT, FETCH_PROJECT } from "../types/projectType";

//get all the project data
export const fetchProject = (data: any) => {
    return {
        type: FETCH_PROJECT,
        payload: data
    }
};

//add the new project data
export const addProject = (data: any) => {
    return {
        type: ADD_PROJECT,
        payload: data
    }
};

//edit the data from db.json
export const editProject = (data: any) => {
    return {
        type: EDIT_PROJECT,
        payload: data
    }
}

//delete the data from list
export const deleteProject = (data: any) => {
    return {
        type: DELETE_PROJECT,
        payload: data
    }
};

//fetch the project data
export const fetchProjectData = () => {
    return ((dispatch: any) => {
        axios
            .get(PROJECT_API)
            .then(response => {
                dispatch(fetchProject(response.data))
            })
            .catch(error => console.log(error))
    })
};

//add the new data to the list
export const addProjectData = (data: any) => {
    return ((dispatch: any) => {
        axios
            .post(PROJECT_API, data)
    })
};

//edit the existing data to the new one
export const editProjectData = (id: any, data: any) => {
    return ((dispatch: any) => {
        axios
            .put(`${PROJECT_API}/${id}`, data);
    })
};

//delete the perticular data from list
export const deleteProjectData = (id: number, data: any) => {
    return ((dispatch: any) => {
        axios
            .delete(`${PROJECT_API}/${id}`, data)
    })
};

//sort the data according to the value
export const sortProjectData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${PROJECT_API}?_sort=${value}`)
            .then(response => {
                dispatch(fetchProject(response.data))
            })
            .catch(error => console.log(error))
    })
};

//filter the data by title
export const filterProjectTitleData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(PROJECT_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.title.toLowerCase().includes(value))
                dispatch(fetchProject(data))
            })
    })
};

//filter the data by incharge person
export const filterProjectInchargeData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(PROJECT_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.incharge.toLowerCase().includes(value))
                dispatch(fetchProject(data))
            })
    })
};

//fetch the all active project data
export const fetchActiveProjectData = () => {
    return ((dispatch: any) => {
        axios
        .get(`${PROJECT_API}?status=Active`)
        .then(response => {
            dispatch(fetchProject(response.data))
        })
        .catch(error => console.log(error))
    })
};

//sort the active project data by value
export const sortActiveProjectData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${PROJECT_API}?status=Active&_sort=${value}`)
            .then(response => {
                dispatch(fetchProject(response.data))
            })
            .catch(error => console.log(error))
    })
};

//filter the active project by title
export const filterActiveProjectTitleData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${PROJECT_API}?status=Active`)
            .then(response => {
                const data = response.data.filter((item: any) => item.title.toLowerCase().includes(value))
                dispatch(fetchProject(data))
            })
    })
};

//filter the active project by incharge name
export const filterActiveProjectInchargeData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${PROJECT_API}?status=Active`)
            .then(response => {
                const data = response.data.filter((item: any) => item.incharge.toLowerCase().includes(value))
                dispatch(fetchProject(data))
            })
    })
};
