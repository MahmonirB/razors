import { setStorageUser, setUser } from "../stores/user";

function setupUser(response){
    const { jwt, user: { username } } = response.data;
    setStorageUser({ jwt, username });
    setUser({ jwt, username });
}
export default setupUser;
