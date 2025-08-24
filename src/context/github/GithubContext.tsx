import { createContext, useReducer, ReactNode } from "react";
import githubReducer from "./GithubReducer";

export interface GithubState {
  users: GithubUser[]
  loading: boolean
}


// User type 
export type GithubUser = {
  id: number
  login: string
  avatar_url: string
  html_url: string
}
// Props for provider
interface GithubProviderProps {
  children: ReactNode
}
// Context type
interface GithubContextType {
  users: GithubUser[]
  loading: boolean
  fetchUsers: () => Promise<void>
}

// Create context
const GithubContext = createContext<GithubContextType | undefined>(undefined)







export const GithubProvider = ({ children }: GithubProviderProps) => {
  const initialState: GithubState = {
    users:[],
    loading: true
  }

const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub error ${response.status}`);
      }

      const data = (await response.json()) as GithubUser[];
     
      dispatch({
        type:'GET_USERS',
        payload:data
      })

    } catch (err) {
      console.error(err);
    }
  };
 return (
  <GithubContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      fetchUsers,
    }}
  >
    {children}
  </GithubContext.Provider>
)};

export default GithubContext