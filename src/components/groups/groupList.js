import React from 'react'

export const GroupList = ({ groups }) => (
    <div className="fac-List">
        <table >
            <tbody>
                <tr>
                    <th >id</th>
                    <th>group</th>
                    <th>faculty</th>
                </tr>
                {
                    groups.map(group => (
                        <tr key={group.id} className='fadeIn animated'>
                            <td style={{ fontWeight: 550 }}>{group.id}</td>
                            <td>{group.groupName}</td>
                            <td>{group.facultyName}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)