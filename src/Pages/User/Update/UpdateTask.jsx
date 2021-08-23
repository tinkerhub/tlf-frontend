import React from 'react';
import HeaderBar from '../../../Components/HeaderBar';
import PurpleButton from '../../../Components/PurpleButton';
import RedBox from '../../../Components/RedBox';
import TextField from '../../../Components/TextField';

import './UpdateTask.css'

function UserUpdateTask() {
    return (
        <div>
            <HeaderBar />

            <form className="container">
                <RedBox label="Update Task" />
                <div style={{ padding: '20px' }} />
                <TextField label="Task Name" />
                <TextField label="Assign Date" />
                <TextField label="Completed Date" />
                <TextField label="Due Date" />
                <TextField label="Status" />
                <PurpleButton label="Update Task" />
            </form>
        </div>
    );
}

export default UserUpdateTask;