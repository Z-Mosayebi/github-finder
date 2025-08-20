import { useEffect, useState } from "react";

type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

function UserResults(): JSX.Element {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub error ${response.status}`);
      }

         const data = (await response.json()) as GithubUser[];
      setUsers(data);
    } catch (err) {
      console.error(err);
    } 
  };


  if(!loading){
  return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md.grid-cols-2">
    {users.map((user)=>(
        <h3  key={user.id}>{user.login}</h3>
    ))}
  </div>;

} else {
   return <h3>Loading ...</h3>
}
}

export default UserResults;
