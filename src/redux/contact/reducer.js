import { ADD_NEW_CONTACT, GET_CONTACTS, DELETE_CONTACT, SAVE_CONTACT } from './constants';

const initialState = {
    contacts: []
}

function ContactReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CONTACT:
            return { ...state, contacts: [...state.contacts, action.payload] }
        case GET_CONTACTS:
            return { ...state, contacts: action.payload }
        case DELETE_CONTACT:
            return {
                ...state, contacts: state.contacts.filter(
                    item => item.id === action.payload.id ?
                        action.payload : item)
            }
        case SAVE_CONTACT:
            return {
                ...state, contacts: state.contacts.map(
                    item => item.id === action.payload.id ?
                        action.payload : item)
            }
        default:
            return state
    }
}
export default ContactReducer;