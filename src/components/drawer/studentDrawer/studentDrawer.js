import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import './studentDrawer.css'
import { schema } from "../../UI/schema/schema";


export const StudentDrawer = ({ Open, toggle, faculties, groups }) => {

    console.log(faculties)
    const [isGroup, setisGroup] = useState(false)
    const [selectFaculty, setselectFaculty] = useState('')


    function onSubmit() {

        toggle()


    }

    function changeFaculty(e) {
        if (e === '') return
        setselectFaculty(e)
        setisGroup(true)
    }



    return <div>
        <div className={Open ? "drawer " : "drawer close"}>
            <p> Create Student</p>
            <form autoComplete="off">
                <input
                    placeholder="First Name"

                />
                <input
                    placeholder="Last Name"

                />
                <input
                    placeholder="E-mail"

                />

                <input
                    placeholder="Phone Number"

                />
                <select onChange={(e) => { changeFaculty(e.target.value) }}>
                    <option value="">choose faculty</option>
                    {
                        faculties.map(fac => (
                            <option value={fac.facultyName} key={fac.id}>{fac.facultyName}</option>
                        ))
                    }
                </select>

                {isGroup ?
                    <select>
                        <option value="">choose group</option>
                        {
                            groups.filter(group => group.facultyName === selectFaculty).map(group => (
                                <option value={group.groupName} key={group.id}>{group.groupName}</option>
                            ))
                        }
                    </select>
                    :
                    null
                }

                <div>
                    <button
                        onChange={() => onSubmit()}
                        type="submit"
                        className="btn"
                    >Save
                        </button>
                </div>


            </form>
        </div>

    </div >
}