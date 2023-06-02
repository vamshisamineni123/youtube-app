// import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT,SET_CONTACTS } from "../actions/contactActions";
// const initialState = {
//   contacts: []
// };

// const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload]
//       };
//     case DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter((contact) => contact.id !== action.payload)
//       };
//     case UPDATE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.map((contact) =>
//           contact.id === action.payload.id ? action.payload.contact : contact
//         )
//       };
//       case SET_CONTACTS:
//       return {
//         ...state,
//         contacts:[...action.payload]
//       };
//     default:
//       return state;
//   }
// };

// export default contactReducer;
import { createSlice } from '@reduxjs/toolkit';
import { SET_CONTACTS } from "../actions/contactActions";

const initialState = {
  contacts: []
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    },
    setContacts:(state,action)=>{
      state.contacts=action.payload;
    }
  },
  
  // extraReducers: (builder) => {
  //   builder.addCase(SET_CONTACTS, (state, action) => {
  //     state.contacts = action.payload;
  //   });
  // }
});

export const { addContact, deleteContact, updateContact ,setContacts} = contactSlice.actions;
export default contactSlice.reducer;
