// TODO: use this store variable to create a store.
import { legacy_createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";

const rootreducer=combineReducers({
   auth: authReducer
})


const thunk=(store)=>(next)=>(action)=>{
    console.log("type of Action", typeof action);

    if(typeof action==="function"){
      return   action(store.dispatch)
    }
    next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


 export const store=legacy_createStore(rootreducer, enhancer)


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}