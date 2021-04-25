import React from 'react'

export const Input = ({ toggle, Open, btnName }) => {


    return (
        <input

            {...register("faculty")}
            type='text'
            name='faculty'
            placeholder='type there...'
        />
    )
}