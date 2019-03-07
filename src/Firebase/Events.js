import { db } from './Firebase'

const eventsRef = db.collection('events')

export const doCreateEvent = (data) =>
    eventsRef
        .add(data)

export const doGetMusicEvents = () =>
    eventsRef
        .where('category', '==', 'Music')
        .get()