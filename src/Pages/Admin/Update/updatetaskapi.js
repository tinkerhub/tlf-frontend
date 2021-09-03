import axios from 'axios';

export const updatetask = async (email, id, task, assignDate, dueDate, completedDate, isComplete) => {
    const token = localStorage.getItem("access_token");
    var body = {
        email: email,
        name: task,
        assign_date: assignDate,
        due_date: dueDate,
        completed_date: completedDate,
        is_complete: isComplete,

    }
    if (!completedDate) {
        body = {
            email: email,
            name: task,
            assign_date: assignDate,
            due_date: dueDate,
            is_complete: isComplete,
        }
    }
    try {
        let response = await axios.patch(`${process.env.REACT_APP_BACKEND_DOMAIN}/activity/update/${id}`,
            body, {
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