import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { acceptChanges, deleteFaculty, inputFaculty } from '../redux/actions/actions'
import { ACCEPT_CHANGES, DELETE_FACULTY, INPUT_CHANGE } from '../redux/ActionTypes/actionTypes'
import { schema } from '../UI/schema/schema';


export const FacultyList = ({ faculties }) => {




    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema('faculty'))
    });

    function onSubmit(formData) {

        console.log(formData)
        reset()

    }
    return (
        <div className="fac-List">
            <table >
                <tbody>
                    <tr>
                        <th >id</th>
                        <th>faculty</th>
                        <th></th>

                    </tr>
                    {
                        faculties.map(fac => (
                            <tr key={fac.id} className="animated fadeIn">
                                <td style={{ fontWeight: 550 }}>{fac.id}</td>

                                {
                                    fac.input ? <td style={{ padding: 0 }}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input
                                                {...register('faculty')}
                                                name='faculty'
                                                type="text"
                                                className='animated fadeIn'
                                            // value={fac.facultyName}
                                            />
                                            <span style={{ width: 5 }}>
                                                <input
                                                    type="image"
                                                    // value={fac.facultyName}
                                                    className='animated fadeIn'
                                                    src='/accept.svg'
                                                    alt="Logo"

                                                />

                                            </span>
                                            <span style={{ width: 5, marginLeft: 16 }}>
                                                <input

                                                    type="image"
                                                    className='animated fadeIn'
                                                    src='/close.svg'
                                                    alt="Logo"
                                                    onClick={() => dispatch(inputFaculty({ type: INPUT_CHANGE, payload: fac.id, input: false }))}
                                                />
                                            </span>
                                        </form>
                                    </td>
                                        :
                                        <td onDoubleClick={() => dispatch(
                                            inputFaculty({ type: INPUT_CHANGE, payload: fac.id, input: true })
                                        )}>
                                            {fac.facultyName}</td>
                                }

                                <td style={{ width: 5 }}>
                                    <span><img onClick={() =>
                                        dispatch(deleteFaculty({
                                            type: DELETE_FACULTY, payload:
                                                { id: fac.id, name: fac.facultyName }
                                        }))}
                                        src='/delete.png' alt="Logo" /></span></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


