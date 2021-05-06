import React, { useState, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Backdrop from '../Backdrop/Backdrop'

import { useDispatch } from "react-redux";
import {
  acceptChanges,
  deleteFaculty,
  inputFaculty,
} from "../redux/actions/actions";
import {
  ACCEPT_CHANGES,
  DELETE_FACULTY,
  FACULTY_INPUT_CHANGE,
} from "../redux/ActionTypes/actionTypes";
import { schema } from "../UI/schema/schema";


export const FacultyList = ({ faculties }) => {



  const [noInput, setnoInput] = useState(true);
  const [inputId, setinputId] = useState('');;
  const [oldFacultyValue, setoldFacultyValue] = useState('')

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema("faculty")),
  });

  function onSubmit(formData) {

    formData.id = inputId
    formData.oldValue = oldFacultyValue


    dispatch(
      acceptChanges({
        type: ACCEPT_CHANGES,
        payload: formData

      })
    )


    setnoInput(true)
    reset();
  }


  return (
    <div>
      <table style={{ marginBottom: -24, backgroundColor: 'white' }}><tr>
        <th style={{ width: 63 }}>id</th>
        <th>faculty</th>

      </tr></table>
      <div className="fac-List" style={!noInput ? { overflowY: "hidden", overflowX: "hidden" } : null}>
        <table style={{ position: "relative" }}>
          <tbody>
            {!noInput ? (
              <tr style={{ display: 'none' }}>
                <td></td>
              </tr>
            ) : null}

            {!noInput ? <Backdrop /> : null}

            {faculties.map((fac) => (
              <Fragment key={fac.id}>
                <tr key={fac.id} className="animated fadeIn">
                  <td style={{ fontWeight: 550, fontSize: 8, width: 62 }}>{fac.id.slice(0, 10).toUpperCase()} <br />  {fac.id.slice(10, 20).toUpperCase()}</td>

                  {fac.input ? (
                    <td style={{ padding: 0 }}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("faculty")}
                          name="faculty"
                          type="text"
                          id={fac.id}
                          className="animated fadeInRight"
                          defaultValue={fac.facultyName}
                        />
                        {errors.faculty && (
                          <p
                            className="invalid animated fadeIn"
                            style={{ margin: "-14px 0px 20px 21px", fontSize: 8 }}
                          >
                            {errors.faculty.message}
                          </p>
                        )}
                        <span style={{ width: 5 }}>
                          <input
                            // onClick={(e) => getId(e.target.id)}
                            type="image"
                            id={fac.id}
                            value={fac.facultyName}
                            className="animated fadeInRight"
                            style={{ marginBottom: -8, border: 0, width: 20 }}
                            src="/accept.svg"
                            alt="Logo"
                          />
                        </span>
                        <span style={{ width: 5, marginLeft: 16 }}>
                          <input
                            type="image"
                            className="animated fadeInRight"
                            style={{ marginBottom: -8, border: 0, width: 20 }}
                            src="/close.svg"
                            alt="Logo"
                            onClick={() =>
                              dispatch(
                                inputFaculty(
                                  {
                                    type: FACULTY_INPUT_CHANGE,
                                    payload: fac.id,
                                    input: false,
                                  },
                                  setnoInput(true)
                                ),
                                reset()
                              )
                            }
                          />
                        </span>
                      </form>
                    </td>
                  ) : (
                    <>
                      <td
                        className="animatedd fadeIn"
                        onDoubleClick={() => {
                          if (!noInput) return;

                          return dispatch(
                            inputFaculty({
                              type: FACULTY_INPUT_CHANGE,
                              payload: fac.id,
                              input: true,
                            }),
                            setnoInput(false),
                            setinputId(fac.id),
                            setoldFacultyValue(fac.facultyName)
                          );
                        }}
                      >
                        {fac.facultyName}
                      </td>
                    </>
                  )}

                  <td style={{ width: 5 }}>
                    <span>
                      <img
                        style={
                          !noInput ? { opacity: 0.1, cursor: "unset" } : null
                        }
                        onClick={() => {
                          if (!noInput) return;
                          return dispatch(
                            deleteFaculty({
                              type: DELETE_FACULTY,
                              payload: { id: fac.id, name: fac.facultyName },
                            })
                          );
                        }}
                        src="/delete.png"
                        alt="Logo"
                      />
                    </span>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
