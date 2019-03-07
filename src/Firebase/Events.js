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

export const doEditEvents = (data) =>
    eventsRef
        .add(data)

export const doEditMusicEvents = () =>
    eventsRef
        .where('category', '==', 'Music')
        .get()

export const doEditNatureEvents = () =>
    eventsRef
        .where('category', '==', 'Nature')
        .get()

export const doEditExerciseEvents = () =>
    eventsRef
        .where('category', '==', 'Exercise')
        .get()

export const doEditArtEvents = () =>
    eventsRef
        .where('category', '==', 'Art')
        .get()