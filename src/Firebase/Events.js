import { db } from './Firebase'
import { storage } from '../Firebase/Firebase'

const eventsRef = db.collection('events')

const storageRef = storage.ref() 

export const doAddStoreFile = (file) =>
    storageRef
        .child(file.name)
        .put(file)

export const getEventPic = (name) =>
    storageRef
        .child(name)
        .getDownloadURL() 
        .then( file => file)

export const doCreateEvent = (data) =>
    eventsRef
        .add(data)

export const doGetMusicEvents = () =>
    eventsRef
        .where('category', '==', 'Music')
        .get()
        .then(snapShot => snapShot.docs.map(d => Object.assign(d.data(), {uid: d.id})))

export const doGetNatureEvents = () =>
    eventsRef
        .where('category', '==', 'Nature')
        .get()
        .then(snapShot => snapShot.docs.map(d => Object.assign(d.data(), {uid: d.id})))

export const doGetExerciseEvents = () =>
    eventsRef
        .where('category', '==', 'Exercise')
        .get()
        .then(snapShot => snapShot.docs.map(d => Object.assign(d.data(), {uid: d.id})))

export const doGetArtEvents = () =>
    eventsRef
        .where('category', '==', 'Art')
        .get()
        .then(snapShot => snapShot.docs.map(d => Object.assign(d.data(), {uid: d.id})))

export const doEditEvents = (data, id) =>
    eventsRef
        .doc(id)
        .update(data)


export const doGetOneEvent = (id) =>
    eventsRef
        .doc(id)
        .get()

export const doDeleteEvent = (id) => 
    eventsRef
        .doc(id)
        .delete()

