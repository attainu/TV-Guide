import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore } from "redux-firestore";
import firestoreConfig from "./../functions/firebaseConfig";
const { createStore, applyMiddleware, compose } = require("redux");


export const store = createStore(rootReducer, composeWithDevTools(compose(applyMiddleware(thunk), reduxFirestore(firestoreConfig))
)
)