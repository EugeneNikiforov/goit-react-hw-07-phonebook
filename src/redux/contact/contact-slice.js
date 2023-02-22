import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "redux/operations";
// import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactSlice = createSlice({
  name: 'items',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(({ id }) => id === payload);
        state.contacts.splice(index, 1);
      }).addMatcher(isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ).addMatcher(isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      ).addMatcher(isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      ),
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =  contactSlice.actions;

// const contactSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addContactAction(state, { payload }) {
//             state.items = [...state.items, payload]
//         },
//         deleteContactAction(state, { payload }) {
//             state.items = state.items.filter((contact) => contact.id !== payload);
//         }
//     }
// })

// export const { addContactAction, deleteContactAction } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;