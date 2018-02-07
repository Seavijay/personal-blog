import {SET_FILTER} from './actionTypes'

export const setFilter = (filterType) => ({
    'filter': filterType,
    'type': SET_FILTER
})