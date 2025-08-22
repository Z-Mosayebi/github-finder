import { createContext, useState } from "react";

export type GithubUser = {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

const GithubContext = createContext<GithubContextType | undefined>(undefined)

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GUTHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

type GithubProviderProps = {
  children: ReactNode
}

export const GithubProvider = ({ children }: GithubProviderProps): JSX.Element => {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return <GithubContext.Provider value={{
    users,
    loading,
    fetchUsers
  }}>
    {children}
  </GithubContext.Provider>
};

export default GithubContext