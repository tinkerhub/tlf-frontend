import axios from "axios";
import qs from "qs";

export const login = (email, password) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/auth/login`;

  const params = qs.stringify({
    username: email,
    password: password,
  });

  axios
    .post(url, params, {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error);
      console.log(params);
    });
};
