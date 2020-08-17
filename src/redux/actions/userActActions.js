import { ADD_TO_WATCHLIST, ADD_TO_SUBSCRIBELIST, VIEW_SUBSCRIBELIST, VIEW_WATCHLIST } from "../actionTypes"
import db from "./../../functions/firestoreConfig";

export const addToWatchList = (item) => async (dispatch) => {
    const res = await db.collection("watchlist").add(item)
    dispatch({
        type: ADD_TO_WATCHLIST, payload: res

    })
}
export const addToSubscribeList = (item) => async (dispatch) => {

    const res = await db.collection("watchlist").add(item)
    dispatch({
        type: ADD_TO_SUBSCRIBELIST, payload: res
    })
}
export const viewSubscribeList = (userId) => async (dispatch) => {
    const res = await db.collection("subscribelist").where("uid", "==", userId)
        .onSnapshot(function (querySnapshot) {
            var subscribelist = [];
            querySnapshot.forEach(function (doc) {
                subscribelist.push(doc.data().name);
            });
            //console.log("Current subscribelist in CA: ", subscribelist.join(", "));
            return subscribelist;
        });
    dispatch({
        type: VIEW_SUBSCRIBELIST, payload: res
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


