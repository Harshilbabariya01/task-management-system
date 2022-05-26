import axios from "axios";
import { EMPLOYEE_API } from "../../constants/constant";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEE } from "../types/employeeType";

//get the all Employee data
export const fetchEmployee = (data: any) => {
    return {
        type: FETCH_EMPLOYEE,
        payload: data
    }
};

//Add the new data
export const addEmployee = (data: any) => {
    return {
        type: ADD_EMPLOYEE,
        payload: data
    }
};

//edit or update the existing data
export const editEmployee = (data: any) => {
    return {
        type: EDIT_EMPLOYEE,
        payload: data
    }
}

//delete the data
export const deleteEmployee = (data: any) => {
    return {
        type: DELETE_EMPLOYEE,
        payload: data
    }
};

//fetch the employee data 
export const fetchEmployeeData = () => {
    return ((dispatch: any) => {
        axios
            .get(EMPLOYEE_API)
            .then(response => {
                dispatch(fetchEmployee(response.data))
            })
            .catch(error => console.log(error))
    })
};

//add new data to the db.json
export const addEmployeeData = (data: any) => {
    return ((dispatch: any) => {
        axios
            .post(EMPLOYEE_API, data)
    })
};

//edit the existing data
export const editEmployeeData = (id: any, data: any) => {
    return ((dispatch: any) => {
        axios
            .put(`${EMPLOYEE_API}/${id}`, data);
    })
};

//delete the perticular data
export const deleteEmployeeData = (id: number, data: any) => {
    return ((dispatch: any) => {
        axios
            .delete(`${EMPLOYEE_API}/${id}`, data)
    })
};

//sort the data according to the value
export const sortEmployeeData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(`${EMPLOYEE_API}?_sort=${value}`)
            .then(response => {
                dispatch(fetchEmployee(response.data))
            })
            .catch(error => console.log(error))
    })
};

//filter the data by name
export const filterEmployeeNameData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(EMPLOYEE_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.name.toLowerCase().includes(value))
                dispatch(fetchEmployee(data))
            })
    })
};

//filter the data by phone number
export const filterEmployeePhoneData = (value: any) => {
    return ((dispatch: any) => {
        axios
            .get(EMPLOYEE_API)
            .then(response => {
                const data = response.data.filter((item: any) => item.phone.toLowerCase().includes(value))
                dispatch(fetchEmployee(data))
            })
    })
};