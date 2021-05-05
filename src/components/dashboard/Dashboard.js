import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearTypings, multiFilter, typingChange } from '../redux/actions/actions';
import { getData } from "../redux/actions/fbActions";
import { SEARCH_TYPINGS } from '../redux/ActionTypes/actionTypes';
import { StudentsList } from "../students/studentsList";
import './Dashboard.css'

export const Dashboard = () => {

  const [change, setChange] = useState(false)
  const [filterGroup, setFilterGroup] = useState([])



  const faculties = useSelector((state) => state.faculties);
  const groups = useSelector((state) => state.groups);
  const students = useSelector((state) => state.students);
  const dashboardFilter = useSelector((state) => state.dashboardFilter);




  const dispatch = useDispatch();

  function disptachSearch(e) {
    return dispatch(
      typingChange({
        type: SEARCH_TYPINGS,
        payload: e.target.value,
        typing: e.target.name

      }))
  }

  function typings(e) {
    setChange(true)
    if (e.target.name === 'firstName') {
      disptachSearch(e)
    }
    if (e.target.name === 'lastName') {
      disptachSearch(e)
    }
    if (e.target.name === 'email') {
      disptachSearch(e)
    }
    if (e.target.name === 'phone') {
      disptachSearch(e)
    }

    if (e.target.name === 'faculty') {
      disptachSearch(e)
      setFilterGroup(groups.filter(g => g.facultyName === e.target.value))

    }

    if (e.target.name === 'group') {
      disptachSearch(e)
    }
    dispatch(
      multiFilter()
    )

  }
  useEffect(() => {
    dispatch(getData("students"));
    dispatch(getData("groups"));
    dispatch(getData("faculties"));

    return () => dispatch(clearTypings());
  }, [dispatch]);



  return (
    <div className="dash-contanier">
      <div className="search-contanier">
        <input onChange={(e) => { typings(e) }} name="firstName" placeholder="First Name" />
        <input onChange={(e) => { typings(e) }} name="lastName" placeholder="Last Name" />
        <input onChange={(e) => { typings(e) }} name="email" placeholder="E-mail" />
        <input onChange={(e) => { typings(e) }} name="phone" type="number" placeholder="Phone" />
        <select onChange={(e) => { typings(e) }} name="faculty">
          <option value=''>choose faculty</option>
          {faculties.map(faculty => (
            <option key={faculty.id} value={faculty.facultyName}>{faculty.facultyName}</option>
          ))}
        </select>
        <select onChange={(e) => { typings(e) }} name="group">
          <option value=''>choose group</option>
          {filterGroup.length ? filterGroup.map(group => (
            <option key={group.id} value={group.groupName}>{group.groupName}</option>
          )) : null}
        </select>
        <StudentsList

          students={change ? dashboardFilter : students}
          faculties={faculties}
          groups={groups}
          forDashBorad={true}
        />
      </div>

    </div>



  )
};
