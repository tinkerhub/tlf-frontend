import axios from "axios";

export const getProfile = async (setProfile) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/profile`;
  const token = localStorage.getItem("access_token");
  console.log(token);
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log(response.data);
      setProfile(response.data);
    });
};

