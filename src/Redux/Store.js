import { createStore } from "redux";
import { rootReducer } from "./Reduser/Root-reduser";

const store = createStore(rootReducer)

export default store