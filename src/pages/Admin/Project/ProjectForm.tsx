
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { ADMIN, PROJECT, PROJECT_API } from '../../../constants/constant';
import { addProjectData, editProjectData } from '../../../redux/actions/projectAction';

const ProjectForm = () => {

    const dispatch: any = useDispatch();

    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [incharge, setIncharge] = useState('');
    const [client, setClient] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [charge, setCharge] = useState('');
    const [priority, setPriority] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadData()
        }
    }, []);

    //load the data to the form  db.json when the admin need to edit the existing data
    const loadData = async () => {
        return await axios
            .get(`${PROJECT_API}/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setIncharge(response.data.incharge);
                setClient(response.data.client);
                setDescription(response.data.description);
                setType(response.data.type);
                setStatus(response.data.status);
                setCharge(response.data.charge);
                setStart(response.data.start);
                setEnd(response.data.end);
                setPriority(response.data.priority)
                setRate(response.data.rate);
            })
            .catch(error => console.log(error))
    };

    //add the data to db.json
    const addProjectHanlder = () => {
        const data = {
            title: title,
            incharge: incharge,
            client: client,
            description: description,
            type: type,
            status: status,
            charge: charge,
            start: start,
            priority: priority,
            end: end,
            rate: rate
        };
        dispatch(addProjectData(data));
    };

    //update the existing data with the new one
    const updateProjectHandler = () => {
        const data = {
            title: title,
            incharge: incharge,
            client: client,
            description: description,
            type: type,
            status: status,
            charge: charge,
            start: start,
            priority: priority,
            end: end,
            rate: rate
        };
        dispatch(editProjectData(id, data))
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Project Info</h3>

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
                                        Start Date
                                        <div className="form-outline">
                                            <input
                                                type="date"
                                                id="start"
                                                className="form-control"
                                                value={start}
                                                onChange={event => setStart(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        End Date
                                        <div className="form-outline">
                                            <input
                                                type="date"
                                                id="end"
                                                className="form-control"
                                                value={end}
                                                onChange={event => setEnd(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-4 col">
                                        Person Incharge
                                        <div className="form-outline">
                                            <select className="select form-control" id="type" value={incharge} onChange={event => setIncharge(event.target.value)}>
                                                <option value="null">Select Project Incharge</option>
                                                <option value="Nirav Patel">Nirav Patel</option>
                                                <option value="Rakesh Shah">Rakesh Shah</option>
                                                <option value="Jinal Pandey">Jinal Pandey</option>
                                                <option value="Bunty Patil">Bunty Patil</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Client Name
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="client"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Client Name"
                                                value={client}
                                                onChange={event => setClient(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Type
                                        <div className="form-outline">
                                            <select className="select form-control" id="type" value={type} onChange={event => setType(event.target.value)}>
                                                <option value="null">Select type</option>
                                                <option value="Web App">Web App</option>
                                                <option value="Design">Design</option>
                                                <option value="NFTs">NFTs</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Satus
                                        <div className="form-outline">
                                            <select className="select form-control" id="status" value={status} onChange={event => setStatus(event.target.value)}>
                                                <option value="null">Select status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Priority
                                        <div className="form-outline">
                                            <select className="select form-control" id="priority" value={priority} onChange={(event: any) => setPriority(event.target.value)}>
                                                <option value="null">Select priority</option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Rate
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="rate"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Rate(In hours)"
                                                value={rate}
                                                onChange={event => setRate(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Charge
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="charge"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Charge(In $)"
                                                value={charge}
                                                onChange={event => setCharge(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {
                                        id ?
                                            <div>
                                                <span>
                                                    <NavLink to={`${ADMIN}${PROJECT}`}><button type="submit" className="btn btn-success btn-lg mb-1 mx-4" onClick={updateProjectHandler} >UPDATE</button></NavLink>
                                                </span>
                                                <span>
                                                    <NavLink to={`${ADMIN}${PROJECT}`}><button type="submit" className="btn btn-success btn-lg mb-1">CANCEL</button></NavLink>
                                                </span>
                                            </div> :
                                            <NavLink to={`${ADMIN}${PROJECT}`}><button type="submit" className="btn btn-success btn-lg mb-1" onClick={addProjectHanlder} >ADD</button></NavLink>
                                    }
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectForm