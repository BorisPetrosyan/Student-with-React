import React from 'react'
import './Dashboard.css'

export const Dashboard = () => (
    <div className="dash-contanier">
        <div className='search-contanier'>
            <input placeholder='First Name' />
            <input placeholder='Last Name' />
            <input placeholder='E-mail' />
            <input type="number" placeholder='Phone' />
            <select><option>Facutlies</option></select>
            <select><option>Groups</option></select>

        </div>
    </div>
)
