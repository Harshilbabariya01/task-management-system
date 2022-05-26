import { useMsal } from '@azure/msal-react';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { DASHBOARD, EMPLOYEE, MAIN, PROJECT, TASK } from '../../constants/constant';
import { loginRequest } from '../../pages/AuthAD/Config';

const Navbar = () => {

    const [position, setPosition] = useState('user');
    const [text, setText] = useState('Login');

    const navigate = useNavigate();
    const { instance } = useMsal();

    //Handle login and logout events respectively
    const loginoutHandler = (instance: any) => {
        if (text === 'Login') {
            instance
                .loginPopup(loginRequest)
                .catch((error: any) => console.error(error));

            setText('Logout');
            setPosition('admin');
            navigate(MAIN)
        }
        else {
            instance
                .logoutPopup()
                .catch((error: any) => console.error(error));

            setText('Login');
            setPosition('user');
            navigate(MAIN)
        }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <h4 className="my-2"><NavLink to={MAIN} className='nav-link'>TMS</NavLink></h4>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                        <li className="nav-item">
                            <NavLink to={`/${position}${DASHBOARD}`} className={`nav-link`}>Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/${position}${EMPLOYEE}`} className={`nav-link`}>Employee</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/${position}${PROJECT}`} className={`nav-link`}>Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/${position}${TASK}`} className={`nav-link`}>Task</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-primary" onClick={() => loginoutHandler(instance)}>
                        {text}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar