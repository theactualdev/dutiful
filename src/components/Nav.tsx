import logo from "/logo.svg";
import search from "/search.svg";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="flex justify-between mx-4 items-center">
            <div className="logo-container">
                <img src={logo} alt="Dutiful Logo" />
            </div>
            <ul className="nav-list flex pt-5 gap-20 font-circular text-[18px] font-normal text-gray items-center">
                <li><img src={search} className="cursor-pointer" alt="Search Icon" /></li>
                <li><Link to={"/contact"}>Business Directory</Link></li>
                <li><Link to={"/features"}>Features</Link></li>
                <li><Link to={"/features"}>Pricing</Link></li>
                <li><Link to={"/home"}>Blog</Link></li>
            </ul>
            <div className="cta-buttons pt-5 text-xl font-circular flex items-center gap-[52px]">
                <Link to={"/login"} className="font-medium text-darkSlateBlue">Login</Link>
                <Link to={"/signup"} className="px-[52px] py-[17px] rounded-md text-royalPurple hover:bg-royalPurple hover:text-white border-royalPurple border-2">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Nav;