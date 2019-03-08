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

export const doAddEventToUser = (userId, data) => 
    userRef
        .doc(userId)
        .collection('events')
        .add(data)

export const doGetUserEvents = (id) =>
    userRef
        .doc(id)
        .collection('events')
        .get()