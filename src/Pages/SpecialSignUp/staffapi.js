import axios from "axios";

export const staffsignup = (name, email, password, secret) => {
  // axios({
  //   method: "post",
  //   url: `${process.env.REACT_APP_BACKEND_DOMAIN}/auth/staff-signup`,
  //   data: {
  //     email: email,
  //     name: name,
  //     contact: "1234567890",
  //     password: password,
  //     secret_code: secret,
  //   },
  //   headers: {
  //     accept: "application/json",
  //   },
  // })
  //   .then((res) => console.log(res.data))
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/auth/staff-signup`;

  const params = JSON.stringify({
    email: email,
    name: name,
    contact: "1234567890",
    password: password,
    secret_code: secret,
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
      console.log(params)
    });
};
