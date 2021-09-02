import axios from "axios";

export const getProfile = async (setProfile) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/profile`;
  const token = localStorage.getItem("access_token");
  console.log(token);
  try {
    let response = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    console.log(response.data);
    localStorage.setItem("profile", JSON.stringify(response.data));
    if (setProfile) {
      setProfile(response.data);
    }
    else return response.data;

  } catch (e) {
    console.log(e);
    return "error";
  }
};
