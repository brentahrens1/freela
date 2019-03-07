import { db } from './Firebase'

const eventsRef = db.collection('events')

export const doCreateEvent = (data) =>
    eventsRef
        .add(data)

export const doGetMusicEvents = () =>
    eventsRef
        .where('category', '==', 'Music')
        .get()


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