import React from 'react'
import { NavLink } from 'react-router-dom'
import { PROJECT_FORM } from '../../../constants/constant'
import Project from './Project'

const Index = () => {
    return (
        <div className="container my-5">
            <h4>Project Data</h4>
            <Project />
            <div>
                <NavLink to={PROJECT_FORM}><button type="button" className="btn btn-dark">Add New Project</button></NavLink>
            </div>
        </div>
    )
}

export default Index