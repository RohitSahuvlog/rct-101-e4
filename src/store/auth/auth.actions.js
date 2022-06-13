// Auth Actions here

import { AUTH_SIGN_IN_LOADING,AUTH_SIGN_IN_SUCCESS ,AUTH_SIGN_IN_LOADING,AUTH_SIGN_OUT} from "./auth.types";


export const authsinginsucess=()=>({type: AUTH_SIGN_IN_SUCCESS 
});
export const authsinginerror=()=>({type:  AUTH_SIGN_IN_ERROR});


export const authsinginloading=()=>({type: AUTH_SIGN_IN_LOADING 
});

export const authsingout=()=>({type: AUTH_SIGN_OUT
});