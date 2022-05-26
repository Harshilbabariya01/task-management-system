import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotCompletedData, filterNotCompletedTaskInchargeData, filterNotCompletedTaskTitleData, sortNotCompletedTaskData } from '../../../redux/actions/taskAction';

const Task = () => {

  const data = useSelector((state: any) => state.task.task);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchNotCompletedData())
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
              dispatch(sortNotCompletedTaskData(event.target.value))
            }}
          >
            <option value="">Sort By</option>s
            <option value="end">End Date</option>
            <option value="type">Type</option>
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
              dispatch(filterNotCompletedTaskTitleData(event.target.value))
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
              dispatch(filterNotCompletedTaskInchargeData(event.target.value))
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
              <th>Description</th>
              <th>Incharge</th>
              <th>Assigned Member</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Type</th>
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
                        <td>{item.description}</td>
                        <td>{item.incharge}</td>
                        <td>{item.assign_to1}{item.assign_to2 && ','} {item.assign_to2}</td>
                        <td>{item.date}</td>
                        <td><div className=" badge bg-success">{item.status}</div></td>
                        <td>{item.type}</td>
                      </tr>
                    </tbody>
                  )
                })
              ) :
              (
                <tbody>
                  <tr>
                    <td colSpan={9}>
                      No Pending Tasks Found.
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

export default Task;