import React, { useState } from "react";
import CustomizedSnackbars from "../../../Components/AlertSnackBar";
import HeaderBar from "../../../Components/HeaderBar";
import PurpleButton from "../../../Components/PurpleButton";
import RedBox from "../../../Components/RedBox";
import TextField from "../../../Components/TextField";

import "./UpdateTask.css";
import { updatetask } from "./updatetaskapi";

function AdminUpdateTask(props) {
  const data = props.location.data;

  const [email, setEmail] = useState(props.location.email);
  const [task, setTask] = useState(data.name);
  const [assignDate, setAssignDate] = useState(data.assign_date);
  const [completedDate, setCompletedDate] = useState(data.completed_date);
  const [dueDate, setDueDate] = useState(data.due_date);
  const [isComplete, setComplete] = useState(data.is_complete);

  const [error, setError] = useState();
  const [msg, setMsg] = useState();

  const id = props.match.params.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await updatetask(
      email,
      id,
      task,
      assignDate,
      dueDate,
      completedDate,
      isComplete
    );
    if (res === "success") {
     setError(false);
      setMsg("Task Updated Successfully");

      setTimeout(function () {
        window.location.replace("/admin/home");
      }, 4000);
    } else if (res === "error") {
      setError(true);
      setMsg("Task Updation Failed");

      setTimeout(function () {
        window.location.replace("/admin/home");
      }, 4000);
    }
  };

  return (
    <div>
      <HeaderBar />
      {(() => {
        if (error && msg) {
          return <CustomizedSnackbars message={msg} severity={"error"} />;
        } else if (!error && msg) {
          return <CustomizedSnackbars message={msg} severity={"success"} />;
        }
      })()}
      <form className="container" onSubmit={handleSubmit}>
        <RedBox label="Edit Task" />
        <div style={{ padding: "20px" }} />
        <TextField
          type="email"
          value={email}
          label="Facilitator Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          type="date"
          value={assignDate}
          label="Assign Date"
          onChange={(e) => setAssignDate(e.target.value)}
        />
        <TextField
          type="date"
          value={completedDate}
          label="Completed Date"
          onChange={(e) => setCompletedDate(e.target.value)}
        />
        <TextField
          type="date"
          value={dueDate}
          label="Due Date"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <TextField
          type="dropdown"
          value={isComplete}
          label="Status"
          onChange={(e) => setComplete(e.target.value)}
        />
        <PurpleButton label="Edit Task" />
      </form>
    </div>
  );
}

export default AdminUpdateTask;
