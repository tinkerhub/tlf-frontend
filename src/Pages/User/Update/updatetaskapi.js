import axios from 'axios';

export const updatetask = async (id, task, assignDate, dueDate, completedDate, isComplete) => {
    const token = localStorage.getItem("access_token");
    try {
        let response = await axios.patch(`${process.env.REACT_APP_BACKEND_DOMAIN}/activity/update/${id}`, {
            name: task,
            assign_date: assignDate,
            due_date: dueDate,
            completed_date: completedDate,
            is_complete: isComplete,
            points: 0
        }, {
            headers: {
                Authorization: "Bearer " + token
            },
        });

        console.log(response.data);
        return ("success");
    } catch (err) {
        if (err.response) {
            console.log(err.message);
        }
        return ("error");
    }
}