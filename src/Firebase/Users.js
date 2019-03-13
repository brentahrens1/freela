import { db } from "../Firebase/Firebase";
import { storage } from '../Firebase/Firebase'

const userRef = db.collection("users")

const storageRef = storage.ref() 

export const doUpdateUserPic = (id, name) =>
// console.log(id,name)
    userRef
        .doc(id)
        .update({ fileRef: name})

export const getUserPic = (name) =>
    storageRef
        .child(name)
        .getDownloadURL() 

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
        .then(snapShot => snapShot.docs.map(d => Object.assign(d.data(), {uid: d.id})))

export const doDeleteEvent = (userId, id) => 
    userRef
        .doc(userId)
        .collection('events')
        .doc(id)
        .delete()

export const doUpdateUserInfo = (id, data) =>
    userRef
        .doc(id)
        .update(data)

