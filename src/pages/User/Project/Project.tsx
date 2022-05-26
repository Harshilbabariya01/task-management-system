import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveProjectData, sortActiveProjectData, filterActiveProjectTitleData, filterActiveProjectInchargeData } from '../../../redux/actions/projectAction';

const Project = () => {

  const data = useSelector((state: any) => state.project.project);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchActiveProjectData())
  }, []);

  return (
    <div className="container my-5">
      <div className="container row">
        <div className="form-outline mb-4 col-md-3">
          <select
            className="select form-control"
            id="sort"
            onChange={event => {
              event.preventDefault();
              dispatch(sortActiveProjectData(event.target.value))
            }}
          >
            <option value="">Sort By</option>
            <option value="start">Start Date</option>
            <option value="end">End Date</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div className="form-outline mb-4 col-md-3"></div>
        <div className="form-outline mb-4 col-md-3">
        <input
            type="search"
            className="form-control"
            id="searchtitle"
            autoComplete="off"
            placeholder="Search by Title..."
            onChange={event => {
              event.preventDefault();
              dispatch(filterActiveProjectTitleData(event.target.value))
            }}
          />
        </div>
        <div className="form-outline mb-4 col-md-3">
          <input
            type="search"
            className="form-control"
            id="searchincharge"
            autoComplete="off"
            placeholder="Search by Incharge..."
            onChange={event => {
              event.preventDefault();
              dispatch(filterActiveProjectInchargeData(event.target.value))
            }}
          />
        </div>
      </div>
      <div id="datatable">
        <table className="table table-hover border">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Incharge</th>
              <th>Description</th>
              <th>Rate(In hrs)</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Charge(In $)</th>
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
                        <td>{item.title}</td>
                        <td>{item.start}</td>
                        <td>{item.end}</td>
                        <td>{item.incharge}</td>
                        <td>{item.description}</td>
                        <td>{item.rate}</td>
                        <td><div className="badge bg-success">{item.status}</div></td>
                        <td>{item.priority}</td>
                        <td>{item.charge}</td>
                      </tr>
                    </tbody>
                  )
                })
              ) :
              (
                <tbody>
                  <tr>
                    <td colSpan={11}>
                      No Pending Projects Found.
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

export default Project;