import React, { useState } from 'react';
import HeaderBar from '../../../Components/HeaderBar';
import PurpleButton from '../../../Components/PurpleButton';
import RedBox from '../../../Components/RedBox';
import TextField from '../../../Components/TextField';

import './UpdateTask.css'
import { updatetask } from './updatetaskapi';

function UserUpdateTask(props) {

    const [task, setTask] = useState('');
    const [assignDate, setAssignDate] = useState('');
    const [completedDate, setCompletedDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [isComplete, setComplete] = useState();

    const id = props.match.params.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await updatetask(id, task, assignDate, dueDate, completedDate, isComplete);
        if (res === 'success') {
            alert("Task Updated successfully");
            window.location.replace('/user/home');

        }
        else if (res === 'error') {
            alert("Task Updation Failed");
            window.location.reload();
        }
    }


    return (
        <div>
            <HeaderBar />

            <form className="container" onSubmit={handleSubmit}>
                <RedBox label="Update Task" />
                <div style={{ padding: '20px' }} />
                <TextField label="Task Name" onChange={(e) => setTask(e.target.value)} />
                <TextField type="date" label="Assign Date" onChange={(e) => setAssignDate(e.target.value)} />
                <TextField type="date" label="Completed Date" onChange={(e) => setCompletedDate(e.target.value)} />
                <TextField type="date" label="Due Date" onChange={(e) => setDueDate(e.target.value)} />
                <TextField type="dropdown" label="Status" onChange={(e) => setComplete(e.target.value)} />
                <PurpleButton label="Update Task" />
            </form>
        </div>
    );
}

export default UserUpdateTask;