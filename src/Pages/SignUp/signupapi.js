import axios from "axios";

export const signup = (name, email, stack, password) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/auth/signup`;
  console.log(process.env.REACT_APP_BACKEND_DOMAIN)

  const params = JSON.stringify({
    email: email,
    name: name,
    contact: "1234567890",
    stack: stack,
    password: password,
  });

  axios
    .post(url, params, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error);
      console.log(params);
    });
};
