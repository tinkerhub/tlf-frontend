import axios from "axios";

export const getActivities = async (setActivities) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/profile/staff`;
  const token = localStorage.getItem("access_token");

  try {
    let response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.setItem("activities", JSON.stringify(response.data));
    if (setActivities) {
      setActivities(response.data);
    } else return response.data;
  } catch (e) {
    console.log(e);
    return "error";
  }
};
