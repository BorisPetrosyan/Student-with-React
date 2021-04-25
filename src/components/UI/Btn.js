import React from 'react'

export const Buttom = ({ toggle, Open, btnName }) => {


    return (
        <button
            onClick={toggle}
            className={Open ? "btn open" : "btn"}
        >{Open ? "Cancel" : `create ${btnName}`}
        </button>
    )
}