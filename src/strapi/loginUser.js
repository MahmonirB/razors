import axios from "axios";
import URL from "./URL";
import setupUser from "./setupUser";

async function loginUser({ email, password }) {
    const response = await axios.post(`${URL}/api/auth/local`, {
        identifier: email,
        password
    })
    .catch(err => console.log(err));

    if (response) {
        setupUser(response);
    }

    return response;
}

export default loginUser;
