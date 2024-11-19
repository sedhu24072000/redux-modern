import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer ={
    fullName:"",
    nationalId:0,
    createdAt:""
}

const customerSlice = createSlice({
    name:'customer',
    initialState:initialStateCustomer,
    reducers:{
        createCustomer :{
            prepare(fullName, nationalId){
                return {
                    payload:{fullName,nationalId}
                }
            },
            reducer(state,action){
                state.fullName = action.payload.fullName
                state.nationalId=action.payload.nationalId
                state.createdAt = new Date().toISOString()
            }
        }
        
    }
})

export const {createCustomer} = customerSlice.actions

export default customerSlice.reducer