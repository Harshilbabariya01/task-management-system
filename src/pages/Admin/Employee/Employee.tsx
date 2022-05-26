import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { EMPLOYEE } from '../../../constants/constant';
import { deleteEmployeeData, fetchEmployeeData, filterEmployeeNameData, filterEmployeePhoneData, sortEmployeeData } from '../../../redux/actions/employeeAction';

const Employee = () => {

  const data = useSelector((state: any) => state.employee.employee);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeeData())
  }, []);

  //delete the data from db.json
  const deleteEmployeeHandler = (id: number) => {
    if (window.confirm('Are You Sure to Delete?')) {
      dispatch(deleteEmployeeData(id, data[id - 1]));
    }

    return dispatch(fetchEmployeeData());
  };

  return (
    <div className="container my-5">
      <div className="container row">
        <div className="form-outline mb-4 col-md-3">
          <select
            className="select form-control"
            id="sort"
            onChange={event => {
              event.preventDefault();
              dispatch(sortEmployeeData(event.target.value))
            }}
          >
            <option value="">Sort By</option>
            <option value="email">Email</option>
            <option value="technology">Technology</option>
            <option value="position">Position</option>
          </select>
        </div>
        <div className="form-outline mb-4 col-md-3"></div>
        <div className="form-outline mb-4 col-md-3">
        <input
            type="search"
            className="form-control"
            id="searchname"
            placeholder="Search by Name..."
            autoComplete="off"
            onChange={event => {
              event.preventDefault();
              dispatch(filterEmployeeNameData(event.target.value));
            }}
          />
        </div>
        <div className="form-outline mb-4 col-md-3">
          <input
            type="search"
            className="form-control"
            id="searchphone"
            placeholder="Search by Phone..."
            autoComplete="off"
            onChange={event => {
              event.preventDefault();
              dispatch(filterEmployeePhoneData(event.target.value));
            }}
          />
        </div>
      </div>
      <div id="datatable">
        <table className="table table-hover border">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Technology</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          {
            (data.length > 0) ?
              (
                data.map((item: any, index: number) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.technology}</td>
                        <td>{item.position}</td>
                        <td>
                          <NavLink to={`${EMPLOYEE}/${item.id}`}><button className="btn btn-success mx-2">Edit</button></NavLink>
                          <button className="btn btn-success" onClick={() => deleteEmployeeHandler(item.id)}>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              ) :
              (
                <tbody>
                  <tr>
                    <td colSpan={7}>
                      No Data Found.
                    </td>
                  </tr>
                </tbody>
              )
          }
        </table>
      </div>
    </div>
  )
}

export default Employee