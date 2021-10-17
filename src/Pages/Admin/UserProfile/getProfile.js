import axios from "axios";

export const getProfile = async (id, setUserProfile) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/profile/staff/${id}`;
  const token = localStorage.getItem("access_token");

  try {
    let response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserProfile(response.data);
  } catch (e) {
    console.log(e);
    return "error";
  }
};
