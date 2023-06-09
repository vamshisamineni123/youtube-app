// Action Types
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const SET_CONTACTS="SET_CONTACT"
// Action Creators
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const updateContact = (id, updatedContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      id,
      contact: updatedContact
    }
  };
};
// Add a new action type
export const setContacts = (contacts) => {
    return {
      type: SET_CONTACTS,
      payload: contacts
    };
  };
  