import React from 'react'

export const Buttom = ({ toggle, Open, btnName, forStudent }) => {


    return (
        <button
            style={ !Open && forStudent ?  {marginLeft:0} : null}
            onClick={toggle}
            className={Open && forStudent  ? "btn openn" : Open ? "btn open" : "btn"}
        >{Open ? "Cancel" : `create ${btnName}`}
        </button>
    )
}