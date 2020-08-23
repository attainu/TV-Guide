import { ADD_TO_WATCHLIST, ADD_TO_SUBSCRIBELIST, VIEW_SUBSCRIBELIST, VIEW_WATCHLIST } from "../actionTypes"
import db from "./../../functions/firestoreConfig";

export const addToWatchList = (item, id) => async (dispatch) => {

    const res = await db.collection("watchlist").doc(id).set(item)

    dispatch({
        type: ADD_TO_WATCHLIST, payload: res

    })
}
export const addToSubscribeList = (item, id) => async (dispatch) => {

    const res = await db.collection("subscribelist").doc(id).set(item)

    dispatch({
        type: ADD_TO_SUBSCRIBELIST, payload: res
    })
}
export const viewSubscribeList = (userId) => async (dispatch) => {
    var arr1 = []
    db.collection("subscribelist").where("uid", "==", userId).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
            arr1.push(doc.data())
        );
        console.log(arr1)
        dispatch({
            type: VIEW_SUBSCRIBELIST, payload: arr1
        })
    })
}
export const viewAddList = (userId) => (dispatch) => {
    var arr = []
    db.collection("watchlist").where("uid", "==", userId).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
            arr.push(doc.data())
        );

        dispatch({
            type: VIEW_WATCHLIST, payload: arr
        })
    })
};


