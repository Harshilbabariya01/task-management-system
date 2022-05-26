import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ADMIN, DASHBOARD, EMPLOYEE, EMPLOYEE_FORM, MAIN, PROJECT, PROJECT_FORM, TASK, TASK_FORM, USER} from '../../constants/constant'
import ProfileContent from '../../pages/AuthAD/Token'
import AdminDashboard from '../../pages/Admin/Dashboard/Dashboard'
import UserDashboard from '../../pages/User/Dashboard/Dashboard'
import EmployeeForm from '../../pages/Admin/Employee/EmployeeForm'
import AdminEmployeeIndex from '../../pages/Admin/Employee/Index'
import UserEmployeeIndex from '../../pages/User/Employee/Index'
import ProjectIndex from '../../pages/Admin/Project/Index'
import UserProjectIndex from '../../pages/User/Project/Index'
import ProjectForm from '../../pages/Admin/Project/ProjectForm'
import AdminTaskIndex from '../../pages/Admin/Task/Index';
import UserTaskIndex from '../../pages/User/Task/Index'
import Navbar from '../common/Navbar'
import TaskForm from '../../pages/Admin/Task/TaskForm'
import Footer from '../common/Footer'

const RouteOfPages = () => {

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={MAIN} element={<ProfileContent />} />
                    <Route path={`${ADMIN}${DASHBOARD}`} element={<AdminDashboard />} />
                    <Route path={`${ADMIN}${EMPLOYEE}`} element={<AdminEmployeeIndex />} />
                    <Route path={EMPLOYEE_FORM} element={<EmployeeForm />} />
                    <Route path={`${EMPLOYEE}/:id`} element={<EmployeeForm />} />
                    <Route path={`${ADMIN}${PROJECT}`} element={<ProjectIndex />} />
                    <Route path={PROJECT_FORM} element={<ProjectForm />} />
                    <Route path={`${PROJECT}/:id`} element={<ProjectForm />} />
                    <Route path={`${ADMIN}${TASK}`} element={<AdminTaskIndex />} />
                    <Route path={TASK_FORM} element={<TaskForm />} />
                    <Route path={`${TASK}/:id`} element={<TaskForm />} />

                    <Route path={`${USER}${DASHBOARD}`} element={<UserDashboard />} />
                    <Route path={`${USER}${EMPLOYEE}`} element={<UserEmployeeIndex />} />
                    <Route path={`${USER}${PROJECT}`} element={<UserProjectIndex />} />
                    <Route path={`${USER}${TASK}`} element={<UserTaskIndex />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default RouteOfPages