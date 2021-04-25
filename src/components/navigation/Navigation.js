import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navigation.css'
export const  Navigation = () => (
        <ul className='tabs' id="navigation">
            <li><NavLink className="tab" to="/" exact >Dashboard</NavLink></li>
            <li><NavLink className="tab" to="/faculties" >Faculties</NavLink></li>
            <li><NavLink className="tab" to="/groups" >Groups</NavLink> </li>
            <li><NavLink className="tab" to="/students">Students</NavLink></li>
        </ul>

    )
