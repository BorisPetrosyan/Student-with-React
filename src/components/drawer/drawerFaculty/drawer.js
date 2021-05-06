
import React from "react";
import { ADD_FACULTY, ADD_GROUP } from "../../redux/ActionTypes/actionTypes";
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import './drawer.css'
import { setFaculty, setGroup } from "../../redux/actions/actions";
import { schema } from "../../UI/schema/schema";


export const Drawer = ({ Open, toggle, id, drawerHeader, faculties, forScema }) => {

    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema(forScema))
    });

    if (!Open) errors.faculty = {}
    if (!Open) errors.group = {}


    function onSubmit(formData) {
        if (drawerHeader === "Faculty") {
            dispatch(
                setFaculty({
                    type: ADD_FACULTY,
                    payload: formData.faculty,
                })
            );
        }
        if (drawerHeader === "Group")
            dispatch(setGroup({ type: ADD_GROUP, payload: formData }));
        toggle();
        reset();
    }

    return (

        <div>
            <div className={Open ? "drawer " : "drawer close"}>
                <p> Create {drawerHeader}</p>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <input

                        {...register((drawerHeader === 'Group') ? "group" : "faculty")}
                        type='text'
                        name={(drawerHeader === 'Group') ? "group" : "faculty"}
                        placeholder='type there...'
                    />
                    {
                        drawerHeader === 'Faculty' ? errors.faculty && <p className='invalid fadeIn animatedd'>{errors.faculty.message}</p> :
                            errors.group && <p className='invalid fadeIn animatedd'>{errors.group.message}</p>

                    }
                    {
                        drawerHeader === 'Group' ?
                            <select
                                {...register((drawerHeader === 'Group') ? "faculty" : "group")}
                                type='text'
                                name={(drawerHeader === 'Group') ? "faculty" : "group"}>
                                <option value="">choose faculty</option>
                                {
                                    faculties.map(fac => (
                                        <option value={fac.facultyName} key={fac.id}>{fac.facultyName}</option>
                                    ))
                                }
                            </select>
                            : null

                    }
                    {drawerHeader === 'Group' ? errors.faculty && <p className='invalid fadeIn animatedd'>{errors.faculty.message}</p> : null}
                    <div>
                        <button
                            type="submit"
                            className="btn"
                        >Save
                        </button>
                    </div>
                </form>
            </div>

        </div >
    )
}
