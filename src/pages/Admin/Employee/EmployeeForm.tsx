
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { ADMIN, EMPLOYEE, EMPLOYEE_API } from '../../../constants/constant';
import { addEmployeeData, editEmployeeData } from '../../../redux/actions/employeeAction';

const EmployeeForm = () => {

    const dispatch: any = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [technology, setTechnology] = useState('');
    const [position, setPosition] = useState('');
    const [code, setCode] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadData()
        }
    }, []);

    //when admin need to edit the data this function sets the input tags values
    const loadData = async () => {
        return await axios
            .get(`${EMPLOYEE_API}/${id}`)
            .then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setTechnology(response.data.technology);
                setPosition(response.data.position)
                setCode(response.data.code);
            })
            .catch(error => console.log(error))
    };

    //adds the data to the db.json
    const addEmployeeHanlder = () => {
        const data = {
            name: name,
            email: email,
            phone: phone,
            technology: technology,
            position: position,
            code: code
        };
        dispatch(addEmployeeData(data));
    };

    //update the data to the db.json
    const updateEmployeeHandler = () => {
        const data = {
            name: name,
            email: email,
            phone: phone,
            technology: technology,
            position: position,
            code: code
        };
        dispatch(editEmployeeData(id, data))
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                        <div className="card rounded-3">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Employee Info</h3>

                                <form className="px-md-2">
                                    <div className="row mb-4 col">
                                        Name
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                                autoComplete="off"
                                                value={name}
                                                onChange={event => setName(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Email
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                                autoComplete="off"
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Phone
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="phone"
                                                className="form-control"
                                                placeholder="Phone"
                                                autoComplete="off"
                                                value={phone}
                                                onChange={event => setPhone(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Technology
                                    <div className="form-outline">
                                        <select className="select form-control" id="techbology" value={technology} onChange={event => setTechnology(event.target.value)}>
                                            <option value="null">Select Technology</option>
                                            <option value="React Js">React Js</option>
                                            <option value="Php">Php</option>
                                            <option value="Python">Python</option>
                                            <option value="QA">QA</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="row mb-4 col">
                                        Position
                                    <div className="form-outline">
                                        <select className="select form-control" id="position" value={position} onChange={event => setPosition(event.target.value)}>
                                            <option value="null">Select Position</option>
                                            <option value="Self-Employee">Self-Employee</option>
                                            <option value="Contract-Base">Contract-Base</option>
                                            <option value="Team Manager">Team Manager</option>
                                        </select>
                                    </div>
                                    </div>

                                    <div className="row mb-4 col">
                                        Registration Code
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="code"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Registration Code"
                                                value={code}
                                                onChange={event => setCode(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {
                                        id ?
                                            <div>
                                                <span>
                                                    <NavLink to={`${ADMIN}${EMPLOYEE}`}><button type="submit" className="btn btn-success btn-lg mb-1 mx-4" onClick={updateEmployeeHandler} >UPDATE</button></NavLink>
                                                </span>
                                                <span>
                                                    <NavLink to={`${ADMIN}${EMPLOYEE}`}><button type="submit" className="btn btn-success btn-lg mb-1">CANCEL</button></NavLink>
                                                </span>
                                            </div> :
                                            <NavLink to={`${ADMIN}${EMPLOYEE}`}><button type="submit" className="btn btn-success btn-lg mb-1" onClick={addEmployeeHanlder} >ADD</button></NavLink>
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

export default EmployeeForm