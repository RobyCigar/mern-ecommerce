import axios from 'axios'
import {URL} from './index'

export const fetchUser = async (token) => {
  return await axios({
    method: "get",
    url: `${URL}/user`,
    headers: {
      Authorization: token
    }
  })
    .then((res) => {
      console.log(res)
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};