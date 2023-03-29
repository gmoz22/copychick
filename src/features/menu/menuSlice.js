import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "home",
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = menuSlice.actions

export default menuSlice.reducer
