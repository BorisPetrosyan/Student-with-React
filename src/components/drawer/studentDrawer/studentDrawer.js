import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import './studentDrawer.css'
import { schema } from "../../UI/schema/schema";
import { ADD_STUDENT } from '../../redux/ActionTypes/actionTypes.js'
import { setStudent } from "../../redux/actions/actions";


export const StudentDrawer = ({ Open, toggle, faculties, groups,id }) => {

   
    const [isGroup, setisGroup] = useState(false)
    const [selectFaculty, setselectFaculty] = useState('')

    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema('student'))
    });
    if (!Open) errors.firstName = {}
    if (!Open) errors.lastName = {}
    if (!Open) errors.email = {}
    if (!Open) errors.phone = {}
    if (!Open) errors.faculty = {}
    if (!Open) errors.group = {}


    function onSubmit(data) {
        dispatch(setStudent({ type: ADD_STUDENT, payload: data, id: id + 1 }))
        toggle()
        reset()
    }
    
    function changeFaculty(e) {
        
        if (e === '')  {setisGroup(false)}
        else {
            errors.faculty = {}
            setselectFaculty(e)
            setisGroup(true)
        }
        
    }

 
    
    return (
      <div style={Open ? { zIndex: 10 } : null  }>
        <div className={Open ? "drawer " : "drawer close"}>
          <p> Create Student</p>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className={Open ? "animated fadeInRight" : null}
              {...register("firstName")}
              placeholder="First Name"
              name="firstName"
            />
            {errors.firstName && (
              <p className="invalid">{errors.firstName.message}</p>
            )}
            <input
              className={Open ? "animated fadeInLeft" : null}
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
              name="lastName"
            />
            {errors.lastName && (
              <p className="invalid">{errors.lastName.message}</p>
            )}

            <input
              {...register("email")}
              className={Open ? "animated fadeInRight" : null}
              type="email"
              placeholder="E-mail"
              name="email"
            />
            {errors.email && <p className="invalid">{errors.email.message}</p>}

            <input
              className={Open ? "animated fadeInLeft" : null}
              type="number"
              {...register("phone")}
              placeholder="Phone Number"
              name="phone"
            />
            {errors.phone && <p className="invalid">{errors.phone.message}</p>}

            <select
              className={Open ? "animated fadeInUp" : null}
              name="faculty"
              {...register("faculty")}
              onChange={(e) => {
                changeFaculty(e.target.value);
              }}
            >
              <option value="">choose faculty</option>
              {faculties.map((fac) => (
                <option value={fac.facultyName} key={fac.id}>
                  {fac.facultyName}
                </option>
              ))}
            </select>

            {errors.faculty && (
              <p className="invalid">{errors.faculty.message}</p>
            )}

            {isGroup ? (
              <>
                {" "}
                <select
                  className="fadeInDown animatedd"
                  name="group"
                  {...register("group")}
                >
                  <option value="">choose group</option>
                  {groups
                    .filter((group) => group.facultyName === selectFaculty)
                    .map((group) => (
                      <option value={group.groupName} key={group.id}>
                        {group.groupName}
                      </option>
                    ))}
                </select>
                {errors.group && (
                  <p className="invalid">{errors.group.message}</p>
                )}
              </>
            ) : null}

            <div>
              <button
                className={Open ? "animatedd flipInX btn" : null}
                type="submit"
                // className="btn"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}