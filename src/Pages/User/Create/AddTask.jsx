import React, { useState } from 'react';
import HeaderBar from '../../../Components/HeaderBar';
import PurpleButton from '../../../Components/PurpleButton';
import RedBox from '../../../Components/RedBox';
import TextField from '../../../Components/TextField';
import './AddTask.css'
import { createtask } from './createtaskapi';



function UserAddTask() {

    const [task, setTask] = useState('');
    const [assignDate, setAssignDate] = useState('');
    const [completedDate, setCompletedDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        let res = await createtask(task, assignDate, dueDate, completedDate);
        if (res === 'success') {
            alert("Task Created successfully");
            window.location.replace('/user/home');
        }
        else if (res === 'error') {
            alert("Task Creation Failed");
            window.location.reload();
        }
    }


    return (
        <div>
            <HeaderBar />

            <form className="container" onSubmit={handleSubmit} >
                <RedBox label="Create Task" />
                <div style={{ padding: '40px' }} />
                <TextField label="Task Name" onChange={(e) => setTask(e.target.value)} />
                <TextField type="date" label="Assign Date" onChange={(e) => setAssignDate(e.target.value)} />
                <TextField type="date" label="Completed Date" onChange={(e) => setCompletedDate(e.target.value)} />
                <TextField type="date" label="Due Date" onChange={(e) => setDueDate(e.target.value)} />
                <PurpleButton label="Add Task" />
            </form>
        </div>
    );
}

export default UserAddTask;