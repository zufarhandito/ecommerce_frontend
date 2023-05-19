import ActionTypes from "./ActionTypes";
import apiMethod from "../../components/api/apiMethod";

export const getAll = () => async(dispatch) => {
    try {
        const res = await apiMethod.findAll();
        // console.log(res.data);
        dispatch({
            type: ActionTypes.GET_USERS,
            payload: res.data
        })
    } catch (error) {
        alert(error.message)
    }
}

export const update = () => async(dispatch) => {
    try {
        const res = await apiMethod.updateUserCustomer(dispatch);
        dispatch({
            type:ActionTypes.UPDATE_USER,
            payload: res.data
        })
    } catch (error) {
        alert(error.message)
    }
}