import logo from "/logo.svg";
import search from "/search.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav(){
    const [bar1, setBar1] = useState("");
    const [bar2, setBar2] = useState("");
    const [bar3, setBar3] = useState("");
    const [sideState, setSideState] = useState("hidden");

    const handleBars = () => {
        if(bar1 === "" && bar2 === "" && bar3 === ""){
            setBar1("bar-1");
            setBar2("bar-2");
            setBar3("bar-3");
            setSideState("flex");
        }else{
            setBar1("");
            setBar2("");
            setBar3("");
            setSideState("hidden");
        }
    }
    return(
        <div className="mobile-wrapper sticky md:static top-0">
            <nav className="flex justify-around relative mt-4 md:mt-0 md:mx-4 items-center">
                <div className="logo-container">
                    <img src={logo} alt="Dutiful Logo" />
                </div>
                <div className="list md:flex hidden justify-between gap-32">
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
                </div>
                <div className="mobile-menu pt-5 md:hidden z-50 flex">
                    <button onClick={handleBars} className="text-3xl flex justify-center flex-col gap-1 text-darkSlateBlue">
                        <div className={`${bar1} w-10 h-2 bg-grapePurple rounded-3xl`}></div>
                        <div className={`${bar2} w-10 h-2 bg-grapePurple rounded-3xl`}></div>
                        <div className={`${bar3} w-10 h-2 bg-grapePurple rounded-3xl`}></div>
                    </button>
                    <div className={`list ${sideState} flex-col absolute -top-3 px-10 pb-16 rounded-r-3xl left-0 bg-grapePurple justify-between gap-32`}>
                        <ul className="nav-list flex flex-col pt-5 gap-20 font-circular text-[18px] font-normal text-gray items-start">
                            <li><img src={search} className="hidden cursor-pointer" alt="Search Icon" /></li>
                            <li><Link to={"/contact"} className="text-lavender">Business Directory</Link></li>
                            <li><Link to={"/features"} className="text-lavender">Features</Link></li>
                            <li><Link to={"/features"} className="text-lavender">Pricing</Link></li>
                            <li><Link to={"/home"} className="text-lavender">Blog</Link></li>
                        </ul>
                        <div className="cta-buttons pt-5 text-xl flex-col font-circular flex items-start gap-[52px]">
                            <Link to={"/login"} className="px-[52px] py-[17px] rounded-md text-white hover:bg-royalPurple hover:text-white border-royalPurple border-2">Login</Link>
                            <Link to={"/signup"} className="px-[52px] py-[17px] rounded-md text-white hover:bg-royalPurple hover:text-white border-royalPurple border-2">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;