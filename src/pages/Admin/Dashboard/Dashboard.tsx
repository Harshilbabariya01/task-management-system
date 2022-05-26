import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { EMPLOYEE_API, PROJECT_API, TASK_API } from '../../../constants/constant';
import Chart from "react-apexcharts";
import Card from '../../../components/common/Card';
import Graph from '../../../components/common/Graph';

const Dashboard = () => {

    const [employee, setEmployee] = useState(0);
    const [task, setTask] = useState(0);
    const [project, setProject] = useState(0);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        getEmployee();
        getProject();
        getTask();
    }, []);

    //get the total employee number
    const getEmployee = () => {
        axios
            .get(EMPLOYEE_API)
            .then(response => setEmployee(response.data.length))
    };

    //get the total project number
    const getProject = () => {
        axios
            .get(PROJECT_API)
            .then(response => setProject(response.data.length))
    };

    //get the total task number
    const getTask = () => {
        axios
            .get(TASK_API)
            .then(response => setTask(response.data.length))
    };

    //display the alert box of Login
    setTimeout(() => {
        setLogin(true)
    }, 1000);

    const option: any = {
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: 20,
                dataLabels: {
                    position: 'top',
                }
            }
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '15px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: ["Employee", "Project", "Task"]
        }
    };

    const series: any = [
        {
            name: "Total",
            data: [employee, project, task]
        }
    ];

    return (
        <div className='container fluid my-5'>
            {
                login ||
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <div>
                        Looged In.
                    </div>
                </div>
            }
            <div className="row">
                <Card name={"Total Employees"} number={employee} />
                <Card name={"Total Projects"} number={project} />
                <Card name={"Total Tasks"} number={task} />

                <Graph option={option} series={series} />
            </div>
        </div>
    )
}
export default Dashboard