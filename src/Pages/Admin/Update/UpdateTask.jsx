import React from 'react';
import HeaderBar from '../../../Components/HeaderBar';
import PurpleButton from '../../../Components/PurpleButton';
import RedBox from '../../../Components/RedBox';
import TextField from '../../../Components/TextField';

import './UpdateTask.css'

function UpdateTask() {
    return (
        <div>
            <HeaderBar />

            <form className="container">
                <RedBox label="Edit Task" />
                <div style={{ padding: '20px' }} />
                <TextField label="Facilitator" />
                <TextField label="Task Name" />
                <TextField label="Assign Date" />
                <TextField label="Completed Date" />
                <TextField label="Due Date" />
                <PurpleButton label="Edit Task" />
            </form>
        </div>
    );
}

export default UpdateTask;