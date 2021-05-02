import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Backdrop from "../Backdrop/Backdrop";
import {
  acceptChangesStudnet,
  deleteStudent,
  inputStudent,
} from "../redux/actions/actions";
import {
  ACCEPT_CHANGES_STUDENT,
  DELETE_STUDENT,
  STUDENT_INPUT_CHANGE,
} from "../redux/ActionTypes/actionTypes";
import { schema } from "../UI/schema/schema";
import { Td } from "../UI/schema/td";

export const StudentsList = ({ students, faculties, groups, forDashBorad }) => {
  const [noInput, setnoInput] = useState(true);
  const [selectFaculty, setselectFaculty] = useState("");
  const [inputId, setinputId] = useState("");

  // const [selectGroup, setselectGroup] = useState("");
  // const [isGroup, setisGroup] = useState(false);

  const dispatch = useDispatch();

  // const [oldGroupValue, setoldGroupValue] = useState("");
  //   console.log(oldGroupValue);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema("student")),
  });

  function onSubmit(data) {
    data.id = inputId;
    dispatch(
      acceptChangesStudnet({
        type: ACCEPT_CHANGES_STUDENT,
        payload: data,
      })
    );
    console.log(data);
    setnoInput(false);
    reset();
  }

  function changeInput(student) {
    if (forDashBorad) return;

    if (!noInput) return;

    return dispatch(
      inputStudent({
        type: STUDENT_INPUT_CHANGE,
        payload: student.id,
        input: true,
      }),
      setinputId(student.id),
      setnoInput(false),
      setselectFaculty(student.faculty)
    );
  }

  function changeFaculty(e) {
    // setisGroup(false);
    errors.faculty = {};
    setselectFaculty(e);
    // reset();
    // setisGroup(true);
  }

  return (
    <div
      className="fac-List inStud "
      style={
        !noInput
          ? { overflowY: "hidden" }
          : null || forDashBorad
            ? { margin: "0 0 0 16px" }
            : null
      }
    >
      <table style={{ position: "relative" }}>
        <tbody>
          <tr>
            <th style={{ width: 1 }}>id</th>
            <th>first name</th>
            <th>last name</th>
            <th style={{ width: 100 }}>email</th>
            <th>phone</th>
            <th>faculty</th>
            <th>group</th>
            {!forDashBorad ? <th></th> : null}
          </tr>
          {!noInput ? <Backdrop /> : null}
          {students.map((student) => (
            <tr
              key={student.id}
              className="animated fadeIn"
              onDoubleClick={() => {
                changeInput(student);
              }}
            >
              <td style={{ fontWeight: 550 }}>{student.id}</td>

              {student.input ? (
                <Td
                  name='firstName'
                  reg={register}
                  firstName={student.firstName}
                  errors={errors}
                  buttons={false}
                  width={100}
                />
              ) : (
                <td className="animatedd fadeIn">{student.firstName}</td>
              )}

              {student.input ? (
                <Td
                  name='lastName'
                  reg={register}
                  firstName={student.lastName}
                  errors={errors}
                  buttons={false}
                  width={100}
                />
              ) : (
                <td className="animatedd fadeIn">{student.lastName}</td>
              )}

              {student.input ? (
                <Td
                  reg={register}
                  name='email'
                  firstName={student.email}
                  errors={errors}
                  buttons={false}
                  width={100}
                />
              ) : (
                <td className="animatedd fadeIn">{student.email}</td>
              )}
              {student.input ? (
                <Td
                  reg={register}
                  name='phone'
                  firstName={student.phone}
                  errors={errors}
                  buttons={true}
                  width={100}
                />
              ) : (
                <td className="animatedd fadeIn">{student.phone}</td>
              )}

              {student.input ? (
                <td style={{ padding: 0 }}>
                  <select
                    {...register("faculty")}
                    name="faculty"
                    style={{ marginLeft: 15, outline: "none" }}
                    className="animatedd fadeIn"
                    onChange={(e) => {
                      changeFaculty(e.target.value);
                    }}
                  >
                    <option value={selectFaculty}>{selectFaculty}</option>
                    {faculties
                      .filter((a) => a.facultyName !== selectFaculty)
                      .map((faculty) => (
                        <option key={faculty.id} value={faculty.facultyName}>
                          {faculty.facultyName}
                        </option>
                      ))}
                  </select>
                </td>
              ) : (
                <td>{student.faculty}</td>
              )}

              {student.input ? (
                <td style={{ padding: 0, margin: "0px -181px 5px" }}>
                  <span
                    style={{
                      display: "inline-grid",
                    }}
                  >
                    <select
                      {...register("group")}
                      name="group"
                      style={{ marginLeft: 8, outline: "none" }}
                      className="animated animated flipInX"
                    >
                      {groups
                        .filter((a) => a.facultyName === selectFaculty)
                        .map((group) => {
                          return (
                            <option key={group.id} value={group.groupName}>
                              {group.groupName}
                            </option>
                          );
                        })}
                    </select>

                    {errors.group && (
                      <span
                        style={{ margin: "35px 0 0 10px" }}
                        className="invalid"
                      >
                        {errors.group.message}
                      </span>
                    )}
                  </span>

                  <span
                    style={{
                      display: "inline-grid",
                      margin: -184,
                      marginBottom: 10,
                    }}
                  >
                    <span style={{ width: 5 }}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          // onClick={(e) => getId(e.target.id)}
                          type="image"
                          id={student.id}
                          className="animateddd flipInX"
                          style={{ marginBottom: -8, border: 0, width: 25 }}
                          src="/accept.svg"
                          alt="Logo"
                        />
                      </form>
                    </span>
                    <span
                      style={{
                        width: 5,
                      }}
                    >
                      <input
                        onClick={() => {
                          dispatch(
                            inputStudent({
                              type: STUDENT_INPUT_CHANGE,
                              payload: student.id,
                              input: false,
                            }),
                            reset(),
                            setnoInput(true)
                          );
                        }}
                        type="image"
                        className=" animateddd flipInX"
                        style={{ marginBottom: -8, border: 0, width: 25 }}
                        src="/close.svg"
                        alt="Logo"
                      />
                    </span>
                  </span>
                </td>
              ) : (
                <td className="animatedd fadeIn">{student.group}</td>
              )}
              {!forDashBorad ? (
                <td style={{ width: 5 }}>
                  <span>
                    <img
                      style={
                        !noInput ? { opacity: 0.1, cursor: "unset" } : null
                      }
                      onClick={() => {
                        if (!noInput) return;
                        return dispatch(
                          deleteStudent({
                            type: DELETE_STUDENT,
                            payload: { id: student.id },
                          })
                        );
                      }}
                      src="/delete.png"
                      alt="Logo"
                    />
                  </span>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
