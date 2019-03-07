import { db } from './Firebase'

const eventsRef = db.collection('events')

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

export const doGetExerciseEvents = () =>
    eventsRef
        .where('category', '==', 'Exercise')
        .get()

export const doGetArtEvents = () =>
    eventsRef
        .where('category', '==', 'Art')
        .get()

export const doEditEvents = (data, id) =>
    eventsRef
        .doc(id)
        .update(data)


export const doGetOneEvent = (id) =>
    eventsRef
        .doc(id)
        .get()