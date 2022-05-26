import React from 'react'
import { NavLink } from 'react-router-dom'
import { TASK_FORM } from '../../../constants/constant'
import Task from './Task'

const Index = () => {
    return (
        <div className="container my-5">
            <h4>Task Data</h4>
            <Task />
            <div>
                <NavLink to={TASK_FORM}><button type="button" className="btn btn-dark">Add New Task</button></NavLink>
            </div>
        </div>
    )
}

export default Index