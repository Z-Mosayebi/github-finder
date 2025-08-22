import { Link } from "react-router-dom";

 type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

// Define props type
type UserItemProps = {
  user: GithubUser;
};

function UserItem({ user: { login, avatar_url } }: UserItemProps): JSX.Element {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row item-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link className="text-base-content opacity-40" to={`/users/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
