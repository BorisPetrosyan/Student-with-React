import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Drawer } from "../drawer/drawerFaculty/drawer";
import { Buttom } from "../UI/Btn";
import { GroupList } from "./groupList";
import { closeEditGroup } from "../redux/actions/actions.js";
import { useDispatch } from "react-redux";

import "./groups.css";
import { getData } from "../redux/actions/fbActions";


export const Groups = () => {
  const faculties = useSelector((state) => state.faculties);
  const groups = useSelector((state) => state.groups);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("groups"));

    return () => dispatch(closeEditGroup());
  }, [dispatch]);

  return (
    <div className="gru-contanier">
      <div className={"draw_cont"}>
        <Drawer
          faculties={faculties}
          Open={isOpen}
          toggle={toggle}
          id={groups.length}
          drawerHeader="Group"
          forScema="group"
        />
        <div>
          <Buttom btnName={"group"} toggle={toggle} Open={isOpen} />
          <GroupList groups={groups} faculties={faculties} />
        </div>
      </div>
    </div>
  );
};;
