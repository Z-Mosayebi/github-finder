import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

type NavbarProps = {
  title?: string;
};

function Navbar({ title = "Github Finder" }: NavbarProps ) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl"/>
          <Link to='/' className="text-lg font-bold align-middle" >
          {title}
          </Link>
        </div>
        <div className=" px-2 mx-2">
            <div className="flex justify-end">
               <Link to='/'className="btn btn-ghost btn-sm rounded-btn">
               Home
               </Link> 
               <Link to='/about'className="btn btn-ghost btn-sm rounded-btn">
               About
               </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
