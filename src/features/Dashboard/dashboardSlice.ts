import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axiosInstance from "../../axios";

type DefaultState = {
    top10Users: Array<User>
}

const defaultState: DefaultState = {
    top10Users: Array()
};

type User = {
    name: string,
    age: number
}

type FetchTop10UsersReponse = Array<User>


export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: defaultState,
    reducers: {
        getTop10Users: (state, action: PayloadAction<{ top10Users: Array<User> }>) => {
            state.top10Users = action.payload.top10Users
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTop10Users.pending, (state) => {
            Alert.alert('Pending!');
        });
        builder.addCase(fetchTop10Users.fulfilled, (state, action: PayloadAction<FetchTop10UsersReponse>) => {
            state.top10Users = action.payload;

            Alert.alert(action.payload[0].name);
        });
        builder.addCase(fetchTop10Users.rejected, (state, action) => {
            Alert.alert('Rejected');
        });
    },
})

export const fetchTop10Users = createAsyncThunk<FetchTop10UsersReponse>(
    "dashboard/getTop10Users",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get(
                `dashboard/getTop10Users`
            );
            const data = response.data;
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)



