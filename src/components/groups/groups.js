import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Drawer } from "../drawer/drawerFaculty/drawer";
import { Buttom } from "../UI/Btn";
import { GroupList } from "./groupList";
import { closeEditGroup } from "../redux/actions/actions.js";
import { useDispatch } from "react-redux";

import "./groups.css";
import { CLOSE_EDIT_GROUP } from "../redux/ActionTypes/actionTypes";

export const Groups = () => {


  const faculties = useSelector((state) => state.faculties);
  const groups = useSelector((state) => state.groups);


  console.log(groups)
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(
      closeEditGroup({
        type: CLOSE_EDIT_GROUP,
        groups,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  //not [dispatch, groups]



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
