import axios from "axios";

export const deletetaskapi = async (task) => {
    const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/activity/delete/${task}`;
    const token = localStorage.getItem("access_token");
    try {
        const res = await axios.delete(
            url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );

        console.log(res.data);
        return ("success");

    } catch (err) {
        console.log(err);
        return ("error");
    }
}