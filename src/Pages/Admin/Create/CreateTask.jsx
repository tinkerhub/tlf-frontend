import React, { useState } from "react";
import CustomizedSnackbars from "../../../Components/AlertSnackBar";
import HeaderBar from "../../../Components/HeaderBar";
import PurpleButton from "../../../Components/PurpleButton";
import RedBox from "../../../Components/RedBox";
import TextField from "../../../Components/TextField";

import "./CreateTask.css";
import { createtask } from "./createtaskapi";


function AdminCreateTask() {
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [assignDate, setAssignDate] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [error, setError] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createtask(email, task, assignDate, dueDate, completedDate);
    if (res === "success") {
      setError(false);
      setMsg("Task Created Successfully");

      setTimeout(function () {
        window.location.replace("/admin/home");
      }, 4000);
    } else if (res === "error") {
      setError(true);
      setMsg("Task Created Failed");

      setTimeout(function () {
        window.location.reload();
      }, 4000);
    }
  };

  return (
    <div>
      <HeaderBar />
      {(() => {
        if (error && msg) {
          return <CustomizedSnackbars message={msg} severity={"error"} />;
        } else if(!error && msg) {
          return <CustomizedSnackbars message={msg} severity={"success"} />;
        }
      })()}
      <form className="container" onSubmit={handleSubmit}>
        <RedBox label="Create Task" />
        <div style={{ padding: "20px" }} />
        <TextField
          type="email"
          label="Facilitator Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Task Name"
          onChange={(e) => setTask(e.target.value)}
        />
        <TextField
          type="date"
          label="Assign Date"
          onChange={(e) => setAssignDate(e.target.value)}
        />
        <TextField
          type="date"
          label="Completed Date"
          onChange={(e) => setCompletedDate(e.target.value)}
        />
        <TextField
          type="date"
          label="Due Date"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <PurpleButton label="Create Task" />
      </form>
    </div>
  );
}

export default AdminCreateTask;
