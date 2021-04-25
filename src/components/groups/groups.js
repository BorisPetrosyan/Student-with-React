import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Drawer } from '../drawer/drawerFaculty/drawer'
import { Buttom } from '../UI/Btn'
import { GroupList } from './groupList'

import './groups.css'

export const Groups = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const faculties = useSelector(state => state.faculties)
    const groups = useSelector(state => state.groups)

    //console.log(groups)
    return (

        <div className="gru-contanier" >
            <div className={"draw_cont"}>
                <Drawer
                    faculties={faculties}
                    Open={isOpen}
                    toggle={toggle}
                    id={groups.length}
                    drawerHeader='Group'
                    forScema='group'

                />
                <div>
                    <Buttom
                        btnName={'group'}
                        toggle={toggle}
                        Open={isOpen}
                    />
                    <GroupList groups={groups} />
                </div>
            </div>
        </div>

    )



}
