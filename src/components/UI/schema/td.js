import React from "react";

export const Td = ({ id, firstName, errors, width, reg }) => {
  return (
    <td style={{ padding: 0 }}>
      <form>
        <input
          reg={reg}
          style={{ width: width, margin: "0 0 0 13px" }}
          name="firstName"
          type="text"
          id={id}
          className="animated zoomInRight"
          defaultValue={firstName}
        />
        {errors.faculty && (
          <p
            className="invalid animated fadeIn"
            style={{ margin: "-14px 0px 20px 21px", fontSize: 8 }}
          >
            {errors.faculty.message}
          </p>
        )}
      </form>
    </td>
  );
};
