import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Drawer } from '../drawer/drawerFaculty/drawer'
import './faculties.css'
import { Buttom } from '../UI/Btn'
import { FacultyList } from './facultyList'
import { getData } from "../redux/actions/fbActions";
export const Faculties = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const faculties = useSelector(state => state.faculties)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData("faculties"));

    }, [dispatch]);



    return (

        <div className="fac-contanier">
            <div className={"draw_cont"}>
                <Drawer
                    Open={isOpen}
                    toggle={toggle}
                    id={faculties.length}
                    drawerHeader='Faculty'
                    forScema='faculty'

                />
                <div>
                    <Buttom
                        btnName={'faculty'}
                        toggle={toggle}
                        Open={isOpen}
                    />
                    <FacultyList faculties={faculties} dispatch={dispatch} />
                </div>

            </div>

        </div>
    )

}