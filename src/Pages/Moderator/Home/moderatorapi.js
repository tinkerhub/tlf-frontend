import axios from "axios";

export const getFacilitators = async (setFacilitators) => {
  const url = `${process.env.REACT_APP_BACKEND_DOMAIN}/profile/staff`;
  const token = localStorage.getItem("access_token");

  console.log(token);
  try {
    let response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    localStorage.setItem("facilitators", JSON.stringify(response.data));
    if (setFacilitators) {
      setFacilitators(response.data);
    } else return response.data;
  } catch (e) {
    console.log(e);
    return "error";
  }
};
