
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { ADMIN, TASK, TASK_API } from '../../../constants/constant';
import { fetchEmployeeData } from '../../../redux/actions/employeeAction';
import { addTaskData, editTaskData } from '../../../redux/actions/taskAction';

const TaskForm = () => {

    const data = useSelector((state: any) => state.employee.employee);
    const dispatch: any = useDispatch();

    const [title, setTitle] = useState('');
    const [incharge, setIncharge] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [assign_to1, setAssign_to1] = useState('');
    const [assign_to2, setAssign_to2] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const { id } = useParams();

    const [hide, setHide] = useState('none');

    useEffect(() => {
        dispatch(fetchEmployeeData())
        if (id) {
            loadData()
        }
    }, []);

    //load and fill the input tags of the form by existing data
    const loadData = async () => {
        return await axios
            .get(`${TASK_API}/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setIncharge(response.data.incharge);
                setDescription(response.data.description);
                setType(response.data.type);
                setDate(response.data.date);
                setStatus(response.data.status);
                setAssign_to1(response.data.assign_to1);
                setAssign_to2(response.data.assign_to2);
            })
            .catch(error => console.log(error))
    };

    //add new data to the db.json
    const addTaskHanlder = () => {
        const data = {
            title: title,
            incharge: incharge,
            description: description,
            date: date,
            status: status,
            type: type,
            assign_to1: assign_to1,
            assign_to2: assign_to2
        };
        dispatch(addTaskData(data));
    };

    //update the existing data with the new one
    const updateProjectHandler = () => {
        const data = {
            title: title,
            incharge: incharge,
            description: description,
            date: date,
            status: status,
            type: type,
            assign_to1: assign_to1,
            assign_to2: assign_to2
        };
        dispatch(editTaskData(id, data))
    };

    //hide and show the adding more than one member for assigning the task
    const addMoreMember = () => {
        setHide('show');
    };

    const hideMoreMember = () => {
        setHide('none');
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Task Info</h3>

                                <form className="px-md-2">
                                    <div className="row mb-4 col">
                                        Title
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="title"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Title"
                                                value={title}
                                                onChange={event => setTitle(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Description
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="description"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Description"
                                                value={description}
                                                onChange={event => setDescription(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        End Date
                                        <div className="form-outline">
                                            <input
                                                type="date"
                                                id="date"
                                                className="form-control"
                                                autoComplete="off"
                                                value={date}
                                                onChange={event => setDate(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Person Incharge
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="incharge"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Person Incharge"
                                                value={incharge}
                                                onChange={event => setIncharge(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Assigned to
                                        <div className="form-outline col-md-10">
                                            <select className="select form-control" id="assign_to1" value={assign_to1} onChange={event => setAssign_to1(event.target.value)}>
                                                <option value="null">Select member</option>
                                                {
                                                    data.map((item: any, index: any) => {
                                                        return <option value={item.name} key={index}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-outline col-md-2">
                                            <NavLink to=''><button className="btn btn-success btn-rounded" onClick={addMoreMember}>+</button></NavLink>
                                        </div>
                                    </div>

                                    <div className={`row mb-4 col d-${hide}`}>
                                        <div className="form-outline col-md-10">
                                            <select className="select form-control" id="assign_to2" value={assign_to2} onChange={event => setAssign_to2(event.target.value)}>
                                                <option value="null">Select member</option>
                                                {
                                                    data.map((item: any, index: any) => {
                                                        return <option value={item.name} key={index}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-outline col-md-2">
                                            <NavLink to=''><button className="btn btn-success btn-rounded" onClick={hideMoreMember}>^</button></NavLink>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Status
                                        <div className="form-outline">
                                            <select className="select form-control" id="status" value={status} onChange={event => setStatus(event.target.value)}>
                                                <option value="null">Select status</option>
                                                <option value="Pending">Pending</option>
                                                <option value="InProgress">InProgress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Cancelled">Cancelled</option>
                                                <option value="On Hold">On Hold</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Type
                                        <div className="form-outline">
                                            <select className="select form-control" id="type" value={type} onChange={event => setType(event.target.value)}>
                                                <option value="null">Select type</option>
                                                <option value="Task">Task</option>
                                                <option value="Bug">Bug</option>
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        id ?
                                            <div>
                                                <span>
                                                    <NavLink to={`${ADMIN}${TASK}`}><button type="submit" className="btn btn-success btn-lg mb-1 mx-4" onClick={updateProjectHandler} >UPDATE</button></NavLink>
                                                </span>
                                                <span>
                                                    <NavLink to={`${ADMIN}${TASK}`}><button type="submit" className="btn btn-success btn-lg mb-1">CANCEL</button></NavLink>
                                                </span>
                                            </div> :
                                            <NavLink to={`${ADMIN}${TASK}`}><button type="submit" className="btn btn-success btn-lg mb-1" onClick={addTaskHanlder} >ADD</button></NavLink>
                                    }
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default TaskForm