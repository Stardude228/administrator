import {
    ADD_NEW_CONTACT, 
    GET_CONTACTS, 
    DELETE_CONTACT, 
    SAVE_CONTACT
} from './constants';

export const getContacts = (data)=>(
    {
        type: GET_CONTACTS,
        payload: data
    }
)

export const addNewContact = (newContact)=>(
    {
        type: ADD_NEW_CONTACT,
        payload: newContact
    }
)

export const deleteContact = (id)=>(
    {
        type: DELETE_CONTACT,
        payload: id
    }
)
export const saveContact = (data)=>(
    {
        type: SAVE_CONTACT,
        payload: data
    }
)
