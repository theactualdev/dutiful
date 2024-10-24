import { Link } from "react-router-dom";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import twitter from "/twitter.svg";
import youtube from "/youtube.svg";
import linkedin from "/linkedin.svg";
import apple from "/apple.svg";
import playstore from "/playstore.svg";

let year = new Date().getFullYear();

function Footer(){
    return(
        <footer className="bg-grapePurple py-8 md:px-[130px] px-10">
            <div className="col-1 flex flex-col md:flex-row justify-between gap-10 md:gap-0 mt-4 text-white"> 
                <div className="row-1 flex flex-col gap-4">
                    <h3><Link to={"/home"} className="font-circular font-medium text-[22px]">Company</Link></h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link to={'/features'} className="font-normal font-circular text-base text-lavender">About</Link></li>
                        <li><Link to={'/contact'} className="font-normal font-circular text-base text-lavender">Contact us</Link></li>
                        <li><Link to={'/contact'} className="font-normal font-circular text-base text-lavender">FAQs</Link></li>
                    </ul>
                </div>
                <div className="row-1 flex flex-col gap-4">
                    <h3><Link to={"/home"} className="font-circular font-medium text-[22px]">Quick Links</Link></h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link to={'/home'} className="font-normal font-circular text-base text-lavender">Find services</Link></li>
                        <li><Link to={'/features'} className="font-normal font-circular text-base text-lavender">Pricing & plans</Link></li>
                        <li><Link to={'/home'} className="font-normal font-circular text-base text-lavender">List your business</Link></li>
                    </ul>
                </div>
                <div className="row-1 flex flex-col gap-4">
                    <h3><Link to={"/home"} className="font-circular font-medium text-[22px]">Resources</Link></h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link to={'/home'} className="font-normal font-circular text-base text-lavender">Blog</Link></li>
                        <li><Link to={'/signup'} className="font-normal font-circular text-base text-lavender">Affiliate program</Link></li>
                    </ul>
                </div>
                <div className="row-1 flex flex-col gap-4">
                    <h3><Link to={"/home"} className="font-circular font-medium text-[22px]">More from Dutiful</Link></h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link to={'/home'} className="font-normal font-circular text-base text-lavender">Dutiful jobs</Link></li>
                    </ul>
                </div>
            </div>
            <hr className="mt-10 border-plumPurple" />
            <div className="col-1 flex md:flex-row flex-col gap-8 md:gap-0 items-center md:justify-between my-4">
                <div className="following flex gap-5 text-white">
                    <p className="font-circular font-medium text-lg">Follow us</p>
                    <Link to={"https://facebook.com"} target="_blank"> <img src={facebook} alt="Facebook" /> </Link>
                    <Link to={"https://instagram.com/_theactualdev_"} target="_blank">  <img src={instagram} alt="Instagram" /> </Link>
                    <Link to={"https://twitter.com/theactualdev"} target="_blank"> <img src={twitter} alt="Twitter" /> </Link>
                    <Link to={"https://www.youtube.com/@theActualDev"} target="_blank"> <img src={youtube} alt="Youtube" /> </Link>
                    <Link to={"https://linkedin.com/in/theactualdev"} target="_blank"> <img src={linkedin} alt="LinkedIn" /> </Link>
                </div>
                <div className="downloading flex gap-5 text-white">
                    <p className="font-circular font-medium text-lg">Download the app</p>
                    <Link to={"https://www.apple.com/"} target="_blank"> <img src={apple} alt="Apple Download" /> </Link>
                    <Link to={"https://play.google.com/store/"} target="_blank"> <img src={playstore} alt="Playstore Download" /> </Link>
                </div>
            </div>
            <hr className="border-plumPurple" />
            <div className="col-1 text-white md:flex-row flex-col items-center flex gap-8 md:gap-32 mt-4">
                <p>&copy; {year} Dutiful&reg; </p>
                <ul className="flex gap-8">
                    <li><Link to={"/home"} className="font-normal text-base font-circular text-lavender">Terms of Service</Link></li>
                    <li><Link to={"/home"} className="font-normal text-base font-circular text-lavender">Privacy Policy</Link></li>
                    <li><Link to={"/home"} className="font-normal text-base font-circular text-lavender">Disclaimer</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;