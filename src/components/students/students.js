
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StudentDrawer } from '../drawer/studentDrawer/studentDrawer'
import { Buttom } from '../UI/Btn'

import './students.css'


export const Students = () => {

    const faculties = useSelector((state) => state.faculties);
    const groups = useSelector((state) => state.groups);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <div className="stu-contanier">
            <div className={"draw_cont"}>
                <StudentDrawer
                    Open={isOpen}
                    toggle={toggle}
                    faculties={faculties}
                    groups={groups}
                />


                <div>
                    <Buttom
                        btnName={'studnet'}
                        toggle={toggle}
                        Open={isOpen}
                    />
                    {/* <FacultyList faculties={faculties} dispatch={dispatch} /> */}
                </div>
            </div>

        </div>
    )
}
