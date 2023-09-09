import { writable } from "svelte/store";

const user = writable({ user: null, jwt: null });

export default user;
