import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../../components/common/Card';
import { PROJECT_API, TASK_API } from '../../../constants/constant';

const Dashboard = () => {

    const [project, setProject] = useState('');
    const [task, setTask] = useState('');
    const [completedTask, setCompletedTask] = useState('');

    useEffect(() => {
        activeProject();
        activeTask();
        completeTask();
    }, []);

    //get the active project number
    const activeProject = () => {
        axios
            .get(`${PROJECT_API}?status=Active`)
            .then(response => setProject(response.data.length))
    };

    //get the working task number
    const activeTask = () => {
        axios
            .get(`${TASK_API}?status=Pending&status=InProgress&status=Cancelled&status=On%20Hold`)
            .then(response => setTask(response.data.length))
    };

    //get the completed task number
    const completeTask = () => {
        axios
            .get(`${TASK_API}?status=Completed`)
            .then(response => setCompletedTask(response.data.length))
    };

    return (
        <div className="container my-5">
            <div className="row">
                <Card name={"Active Projects"} number={project} />
                <Card name={"Active Tasks"} number={task} />
                <Card name={"Completed Tasks"} number={completedTask} />
            </div>
        </div >
    )
}

export default Dashboard