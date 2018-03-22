import { FilterTypes } from '../../constants'
import { SET_FILTER } from './actionTypes'

export default (state = { category: FilterTypes.category.ALL, tag: FilterTypes.tag.ALL }, action) => {
    switch (action.type) {
    case SET_FILTER: {
        return action.filter
    }
    default:
        return state
    }
}