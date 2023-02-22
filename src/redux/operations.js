import axios from "axios";
// import {  fetchingInProgress,  fetchingSuccess,  fetchingError,} from "./contact/contact-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63f53edf55677ef68bcb9470.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/contacts");
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contactsData, thunkAPI) => {
    try {
        const { data } = await axios.post("/contacts", { ...contactsData });
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);
export const deleteContact = createAsyncThunk("tasks/deleteContact", async (contactId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${contactId}`);
        return data.id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);