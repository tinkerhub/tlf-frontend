import React from 'react';
import HeaderBar from '../../../Components/HeaderBar';
import PurpleButton from '../../../Components/PurpleButton';
import RedBox from '../../../Components/RedBox';
import TextField from '../../../Components/TextField';

import './CreateTask.css'

function AdminCreateTask() {
    return (
        <div>
            <HeaderBar />

            <form className="container">
                <RedBox label="Create Task" />
                <div style={{ padding: '20px' }} />
                <TextField label="Facilitator" />
                <TextField label="Task Name" />
                <TextField label="Assign Date" />
                <TextField label="Completed Date" />
                <TextField label="Due Date" />
                <PurpleButton label="Create Task" />
            </form>
        </div>
    );
}

export default AdminCreateTask;