
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentDrawer } from '../drawer/studentDrawer/studentDrawer'

import { Buttom } from '../UI/Btn'

import './students.css'
import { StudentsList } from './studentsList'
import { getData } from "../redux/actions/fbActions";

export const Students = () => {
  const faculties = useSelector((state) => state.faculties);
  const groups = useSelector((state) => state.groups);
  const students = useSelector((state) => state.students);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getData("students"));
    dispatch(getData("faculties"));
    dispatch(getData("groups"));

  }, [dispatch]);
  return (
    <div className="stu-contanier">
      <div className="draw_cont">
        <StudentDrawer
          Open={isOpen}
          toggle={toggle}
          faculties={faculties}
          groups={groups}
          id={students.length}
        />

        <div style={{ marginLeft: -240 }}>
          <Buttom
            forStudent={true}
            btnName={"studnet"}
            toggle={toggle}
            Open={isOpen}
          />
          <StudentsList
            students={students}
            faculties={faculties}
            groups={groups}
          />
        </div>
      </div>
    </div>
  );
};
