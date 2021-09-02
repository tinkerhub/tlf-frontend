import axios from "axios";
import qs from "qs";

export const login = async (email, password, setTokenReceived) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/auth/login`;

  const params = qs.stringify({
    username: email,
    password: password,
  });

  try {
    let res = await axios
      .post(url, params, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      });
    localStorage.setItem("access_token", res.data.access_token);
    // setTokenReceived(true);
    return ("success");

  } catch (error) {
    console.log(error);
    return ("error");
  }
};
