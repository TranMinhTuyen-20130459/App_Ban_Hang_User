import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name_customer: '',
    phone_number: '',
    to_address: {
        address: '',
        ward_name: '',
        district_name: '',
        province_name: '',
        ward_id: '',
        district_id: '',
        province_id: '',
    },
};

const orderAddressSlice = createSlice({

    name: 'order_address',
    initialState: initialState,
    reducers: {

        setAddress: (state, action) => {
            console.log(action.payload)
            return action.payload; // Trả về trạng thái mới từ action.payload
        }

    }

})

export const {setAddress} = orderAddressSlice.actions;
export default orderAddressSlice.reducer;