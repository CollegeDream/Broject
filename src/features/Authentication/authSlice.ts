import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserCredentials } from "../../types";
import { Alert } from "react-native";
import axiosInstance from "../../axios";

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
        try {
            const response = await axiosInstance.post(
                "/auth/login",
                JSON.stringify(userCredentials),
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            );
            const data = response.data;
            Alert.alert('Button Pressed!', data);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
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
