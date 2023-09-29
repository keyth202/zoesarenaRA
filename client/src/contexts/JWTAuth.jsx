import { createContext, useEffect, useReducer } from "react";
import LoadingScreen from "components/LoadingScreen";
import axios from "../utils/axios"; // --------------------------------------------------------

// --------------------------------------------------------
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}; // const isValidToken = (accessToken: string) => {
//   if (!accessToken) return false;
//   // const decodedToken = jwtDecode<{ exp: number }>(accessToken);
//   const currentTime = Date.now() / 1000;
//   // return decodedToken.exp > currentTime;
// };
// const setSession = (accessToken: string | null) => {
//   if (accessToken) {
//     // localStorage.setItem('accessToken', accessToken);
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   } else {
//     // localStorage.removeItem('accessToken');
//     delete axios.defaults.headers.common.Authorization;
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      {
        return {
          isInitialized: true,
          user: action.payload.user,
          isAuthenticated: action.payload.isAuthenticated
        };
      }

    case "LOGIN":
      {
        return { ...state,
          isAuthenticated: true,
          user: action.payload.user
        };
      }

    case "LOGOUT":
      {
        return { ...state,
          user: null,
          isAuthenticated: false
        };
      }

    case "REGISTER":
      {
        return { ...state,
          isAuthenticated: true,
          user: action.payload.user
        };
      }

    default:
      {
        return state;
      }
  }
};

const AuthContext = createContext({ ...initialState,
  method: "JWT",
  logout: () => {},
  login: (email, password) => Promise.resolve(),
  register: (email, password, username) => Promise.resolve()
});
export const JWTAuthProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    const {
      data
    } = await axios.post("/api/auth/login", {
      email,
      password
    }); // setSession(data.accessToken);

    dispatch({
      type: "LOGIN",
      payload: {
        user: data.user
      }
    });
  };

  const register = async (email, username, password) => {
    const {
      data
    } = await axios.post("/api/auth/register", {
      email,
      username,
      password
    }); // setSession(data.accessToken);

    dispatch({
      type: "REGISTER",
      payload: {
        user: data.user
      }
    });
  };

  const logout = () => {
    // setSession(null);
    dispatch({
      type: "LOGOUT"
    });
  };

  useEffect(() => {
    (async () => {
      try {
        // const accessToken = localStorage.getItem("accessToken");
        // if (accessToken && isValidToken(accessToken)) {
        //   setSession(accessToken);
        //   const { data } = await axios.get("/api/auth/profile");
        //   dispatch({
        //     type: "INIT",
        //     payload: { user: data.user, isAuthenticated: true },
        //   });
        // } else {
        //   dispatch({
        //     type: "INIT",
        //     payload: { user: null, isAuthenticated: false },
        //   });
        // }
        const {
          data
        } = await axios.get("/api/auth/profile");

        if (data?.user) {
          dispatch({
            type: "INIT",
            payload: {
              user: data.user,
              isAuthenticated: true
            }
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              user: null,
              isAuthenticated: false
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            user: null,
            isAuthenticated: false
          }
        });
      }
    })();
  }, []); // show loading until not initialized

  if (!state.isInitialized) <LoadingScreen />;
  return <AuthContext.Provider value={{ ...state,
    method: "JWT",
    login,
    register,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};
export default AuthContext;