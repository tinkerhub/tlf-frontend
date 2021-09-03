import axios from 'axios';

export const createtask = async (email, task, assignDate, dueDate, completedDate) => {
    const token = localStorage.getItem("access_token");
    var body = {
        email: email,
        name: task,
        assign_date: assignDate,
        due_date: dueDate,
        completed_date: completedDate,
    }
    if (!completedDate) {
        body = {
            email: email,
            name: task,
            assign_date: assignDate,
            due_date: dueDate,
        }
    }
    try {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_DOMAIN}/activity/create/staff/`,
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