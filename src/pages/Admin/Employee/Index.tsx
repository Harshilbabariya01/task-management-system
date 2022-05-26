import React from 'react'
import { NavLink } from 'react-router-dom'
import { EMPLOYEE_FORM } from '../../../constants/constant'
import Employee from './Employee'

const Index = () => {
    return (
        <div className="container my-5">
            <h4>Employee Data</h4>
            <Employee />
            <div>
                <NavLink to={EMPLOYEE_FORM}><button type="button" className="btn btn-dark">Add New Employee</button></NavLink>
            </div>
        </div>
    )
}

export default Index