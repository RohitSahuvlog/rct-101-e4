// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch (type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        loading: false,
  data: {
    token: payload,
    isAuthenticated: true,
  },
  error: false,
   
      };
    }
    case "AUTH_SIGN_OUT": {
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: false,
        },
        error: false,
      };
    }
    case "AUTH_SIGN_IN_LOADING": {
      return {
        ...state,
        loading: true,
        data: {
          token: "",
          isAuthenticated: false,
        },
        error: false,
      };
    }
    case "AUTH_SIGN_IN_ERROR": {
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          isAuthenticated: false,
        },
        error: true,
      };
    }
  
    default: {
      return state;
    }
  }

};
