import React, { useState, Fragment } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from '../UI/schema/schema';
import { useDispatch } from "react-redux";
import { acceptChangesGroup, inputGroup } from '../redux/actions/actions'
import { GROUP_INPUT_CHANGE, DELETE_GROUP, ACCEPT_CHANGES_GROUP } from '../redux/ActionTypes/actionTypes';
import { deleteGroup } from "../redux/actions/actions";
import Backdrop from '../Backdrop/Backdrop';
export const GroupList = ({ groups, faculties }) => {
  const [noInput, setnoInput] = useState(true);
  const [inputId, setinputId] = useState("");
  // const [oldFacultyValue, setoldFacultyValue] = useState('')
  const [oldGroupValue, setoldGroupValue] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema("group")),
  });
  const dispatch = useDispatch();

  function onSubmit(formData) {
    formData.id = inputId;
    dispatch(
      acceptChangesGroup({
        type: ACCEPT_CHANGES_GROUP,
        payload: formData,
      })
    );

    setnoInput(true);
    reset();
  }

  return (
    <div className="fac-List" style={!noInput ? { overflowY: "hidden" } : null}>
      <table style={{ position: "relative" }}>
        <tbody>
          <tr>
            <th style={{ width: 50 }}>id</th>
            <th style={{ width: 335 }}>group</th>
            <th>faculty</th>
            <th></th>
          </tr>

          {!noInput ? <Backdrop /> : null}
          {groups.map((group) => (
            <Fragment key={group.id}>
              <tr key={group.id} className="fadeIn animated">
                <td style={{ fontWeight: 550 }}>{group.id}</td>

                {group.input ? (
                  <td style={{ padding: 0 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        {...register("group")}
                        name="group"
                        type="text"
                        id={group.id}
                        className="animated fadeInRight"
                        defaultValue={group.groupName}
                      />
                      {errors.group && (
                        <p
                          className="invalid fadeIn animatedd"
                          style={{ margin: "-14px 0px 20px 21px", fontSize: 8 }}
                        >
                          {errors.group.message}
                        </p>
                      )}
                      <span style={{ width: 5 }}>
                        <input
                          type="image"
                          value={group.facultyName}
                          className="animated fadeInRight"
                          style={{ marginBottom: -8, border: 0, width: 20 }}
                          src="/accept.svg"
                          alt="Logo"
                        />
                      </span>
                      <span
                        style={{ width: 5, marginLeft: 16 }}
                        className="animated fadeInRight"
                      >
                        <input
                          type="image"
                          className="animated fadeInRight"
                          style={{ marginBottom: -8, border: 0, width: 20 }}
                          src="/close.svg"
                          alt="Logo"
                          onClick={() =>
                            dispatch(
                              inputGroup({
                                type: GROUP_INPUT_CHANGE,
                                payload: group.id,
                                input: false,
                              }),
                              setnoInput(true),
                              reset()
                            )
                          }
                        />
                      </span>
                    </form>
                  </td>
                ) : (
                  <td
                    className="animatedd fadeIn"
                    onDoubleClick={() => {
                      if (!noInput) return;

                      return dispatch(
                        inputGroup({
                          type: GROUP_INPUT_CHANGE,
                          payload: group.id,
                          input: true,
                        }),
                        setnoInput(false),
                        setinputId(group.id),
                        setoldGroupValue(group.facultyName)
                      );
                    }}
                  >
                    {group.groupName}
                  </td>
                )}

                {group.input ? (
                  <td style={{ padding: 0 }}>
                    <select
                      {...register("faculty")}
                      name="faculty"
                      style={{ marginLeft: 15, outline: "none" }}
                      className="animatedd fadeIn"
                    >
                      <option value={oldGroupValue}>{oldGroupValue}</option>
                      {faculties
                        .filter((a) => a.facultyName !== oldGroupValue)
                        .map((faculty) => (
                          <option key={faculty.id} value={faculty.facultyName}>
                            {faculty.facultyName}
                          </option>
                        ))}
                    </select>
                  </td>
                ) : (
                  <td>{group.facultyName}</td>
                )}

                <td style={{ width: 5, marginLeft: -22 }}>
                  <span>
                    <img
                      style={
                        !noInput ? { opacity: 0.1, cursor: "unset" } : null
                      }
                      onClick={() => {
                        if (!noInput) return;
                        return dispatch(
                          deleteGroup({
                            type: DELETE_GROUP,
                            payload: { id: group.id, name: group.groupName },
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
  );
}