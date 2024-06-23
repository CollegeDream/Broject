import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserCredentials } from "../../types";
import { Alert } from "react-native";

type DefaultState = {
    token: string,
}

const defaultState: DefaultState = {
    token: ""
};

interface LoginResponse {
    token: string;
}

export const loginPost = createAsyncThunk<LoginResponse, UserCredentials>(
    "auth/login",
    async (userCredentials: UserCredentials, thunkAPI) => {
        Alert.alert('Login Pressed!');
        const response = await fetch(
            `https://888f-2402-800-62a7-eaa9-a814-4ea2-97ef-13db.ngrok-free.app/auth/login`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(userCredentials)
            }
        );


        if (!response.ok) {
            return thunkAPI.rejectWithValue('Failed to fetch token');
        }

        const data = await response.json();
        Alert.alert('Button Pressed!', data);
        return data;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginPost.pending, (state) => {
            // Handle pending state if needed
            Alert.alert('Pending!');
        });
        builder.addCase(loginPost.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
            state.token = action.payload.token;
            Alert.alert('Fulfilled');
        });
        builder.addCase(loginPost.rejected, (state, action) => {
            Alert.alert('Rejected');
        });
    },
});

export const { login } = authSlice.actions;
export default authSlice;
