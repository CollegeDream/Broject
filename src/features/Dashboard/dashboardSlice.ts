import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

type DefaultState = {
    top10Users: Array<User>
}

const defaultState: DefaultState = {
    top10Users : Array()
};

type User = {
    name: string,
    age: number
}

type fetchTop10UsersReponse = Array<User>


export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: defaultState,
    reducers: {
        getTop10Users: (state, action: PayloadAction<{top10Users: Array<User>}>) => {
                state.top10Users = action.payload.top10Users
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTop10Users.pending, (state) => {
            Alert.alert('Pending!');
        });
        builder.addCase(fetchTop10Users.fulfilled, (state, action: PayloadAction<fetchTop10UsersReponse>) => {
            state.top10Users = action.payload;
            
            Alert.alert(action.payload[0].name);
        });
        builder.addCase(fetchTop10Users.rejected, (state, action) => {
            Alert.alert('Rejected');
        });
    },
})

export const fetchTop10Users = createAsyncThunk<fetchTop10UsersReponse>(
    "dashboard/getTop10Users",
    async(thunkAPI) => {
        const response = await fetch(
            `https://d8f9-2601-646-9d84-7800-8457-f62f-2f94-a17a.ngrok-free.app/dashboard/fetchTop10Users`
        );
        const data = await response.json();

        return data;
    }
)



