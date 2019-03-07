import { db } from "../Firebase/Firebase";

const userRef = db.collection("users")

export const doAddUser = (id, user) =>
    userRef
        .doc(id)
        .set(user);

export const doGetUser = (id) => 
    userRef
        .doc(id)
        .get()

