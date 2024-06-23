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

type fetchTop10UsersReponse = {
    top10Users: Array<User>
}


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
            state.top10Users = action.payload.top10Users;
            Alert.alert('Fulfilled');
        });
        builder.addCase(fetchTop10Users.rejected, (state, action) => {
            Alert.alert('Rejected');
        });
    },
})

export const fetchTop10Users = createAsyncThunk<fetchTop10UsersReponse, number>(
    "dashboard/getTop10Users",
    async(userId: number, thunkAPI) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${userId}`
        );
        const data = await response.json();
        return data
    }
)



