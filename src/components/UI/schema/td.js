import React from "react";

export const Td = ({ id, firstName, errors, width, reg, name }) => {
  if (errors.phone) { errors.phone.message = 'need to be number' }
  return (
    <td style={{ padding: 0 }}>
      <form>
        <input
          {...reg(name)}
          name={name}
          style={{ width: width, margin: "0 0 0 13px" }}

          type={'text'}
          id={id}
          className="animated zoomInRight"
          defaultValue={firstName}
        />
        {name === 'firstName' ? errors.firstName && (
          <p
            className="invalid animated fadeIn"
            style={{ margin: "-2px 0px 19px 11px", fontSize: 8 }}
          >
            {errors.firstName.message}
          </p>
        ) : null}
        {name === 'lastName' ? errors.lastName && (
          <p
            className="invalid animated fadeIn"
            style={{ margin: "-2px 0px 19px 11px", fontSize: 8 }}
          >
            {errors.lastName.message}
          </p>
        ) : null}
        {name === 'email' ? errors.email && (
          <p
            className="invalid animated fadeIn"
            style={{ margin: "-2px 0px 19px 11px", fontSize: 8 }}
          >
            {errors.email.message}
          </p>
        ) : null}
        {name === 'phone' ? errors.phone && (
          <p
            className="invalid animated fadeIn"
            style={{ margin: "-2px 0px 19px 11px", fontSize: 8 }}
          >
            {errors.phone.message}
          </p>
        ) : null}
      </form>
    </td>
  );
};
