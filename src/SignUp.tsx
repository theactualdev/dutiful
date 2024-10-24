import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eye from "/eye.svg";
import blindEye from '/blind-eye.svg'
import user from "/user.svg";
import userDisabled from "/user-disabled.svg";
import market from "/market.svg";
import marketDisabled from "/market-disabled.svg"; 
import check from "/check.svg";
import { doCreateUserWithEmailandPassword } from "./firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";


function SignUp(){
    const [passType, setpassType] = useState("text");
    const [altPassType, setAltPassType] = useState("text");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setpassword] = useState("");
    const [altPassword, setaltPassword] = useState("")
    const [userType, setuserType] = useState("regular")
    const [userRegular, setuserRegular] = useState(true);
    const [userService, setuserService] = useState(false);
    const navigate = useNavigate();
    const userTypes = [
        {
            name: "Regular user",
            logo: user,
            disabledLogo: userDisabled,
            active: userRegular,
            type: "regular"
        },
        {
            name: "Service provider",
            logo: market,
            disabledLogo: marketDisabled,
            active: userService,
            type: 'service'
        },
    ]

    const hidePassword = () => {
        passType === "text" ? setpassType("password") : setpassType("text");
    }

    const hideAltPassword = () => {
        altPassType === "text" ? setAltPassType("password") : setAltPassType("text");
    }

    const changeUser = (e : any) => {
        e.preventDefault();

        if(userType === "regular"){
            setuserType("service")
            setuserRegular(false)
            setuserService(true)
        }else if(userType === "service"){
            setuserType("regular")
            setuserRegular(true)
            setuserService(false)
        }
    }

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        if(password !== altPassword){
            alert("Passwords do not match")
            return;
        }else{
            try{
                const newUser = await doCreateUserWithEmailandPassword(email, password);
                const user = newUser.user;
                const userDetails = {
                    uid: user.uid,
                    email: user.email,
                    type: userType,
                    name: name,
                    number: number
                }
                await setDoc(doc(db, "users", user.uid), userDetails);                
                navigate("/home")
            }catch(error: any){
                console.log(error)
            }
        }
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="mb-20">
            <div className="wrapper flex w-full mt-[72px] items-center justify-center">
                <div className="card flex flex-col text-left gap-8">
                    <div className="text flex flex-col gap-3">
                        <p className='font-circular text-base font-normal text-gray'>Sign up for free!</p>
                        <h1 className='font-semibold text-4xl font-recoleta-alt text-darkSlateBlue'>Get started</h1>
                    </div>
                    <div className="user-type">
                        <div className="type flex justify-between">
                            { userTypes.map((userTypes) => (
                                <div onClick={(e) => changeUser(e)} className="relative cursor-pointer flex rounded-xl px-[22px] py-[30px] items-center gap-6 border-royalPurple border">
                                    <img src={userTypes.active === true ? userTypes.logo : userTypes.disabledLogo} alt="User" />
                                    <p className={`font-circular text-base font-normal ${userTypes.active === true ? "text-royalPurple" : "text-blueGray"}`}>{userTypes.name}</p>
                                    {userTypes.active === true && <img src={check} alt="Check" className="absolute -right-5 -top-2" />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form flex flex-col gap-6">
                        <div className="input flex flex-col gap-2">
                            <label htmlFor="name" className='font-circular text-base font-medium text-royalPurple'>Full name</label>
                            <input required type="text" onChange={(e) => setname(e.target.value)} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[56px]' />
                        </div>
                        <div className="input flex flex-col gap-2">
                            <label htmlFor="email" className='font-circular text-base font-medium text-royalPurple'>Email</label>
                            <input required type="email" onChange={(e) => setemail(e.target.value)} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[56px]' />
                        </div>
                        <div className="input flex flex-col gap-2">
                            <label htmlFor="number" className='font-circular text-base font-medium text-royalPurple'>Phone number</label>
                            <input required type="number" onChange={(e) => setnumber(e.target.value)} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[56px]' />
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='font-circular text-base font-medium text-royalPurple'>Password</label>
                            <div className="in relative">
                                <input required onChange={(e) => setpassword(e.target.value)} type={passType} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[56px]' />
                                <img src={passType === "text" ? eye : blindEye} className='absolute right-4 cursor-pointer top-1/3' alt="view password"  onClick={hidePassword}/>
                            </div>
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='font-circular text-base font-medium text-royalPurple'>Re-enter Password</label>
                            <div className="in relative">
                                <input onChange={(e) => setaltPassword(e.target.value)} type={altPassType} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[56px]' />
                                <img src={altPassType === "text" ? eye : blindEye} className='absolute right-4 cursor-pointer top-1/3' alt="view password"  onClick={hideAltPassword}/>
                            </div>
                        </div>
                        <p className="font-circular font-normal text-sm"> <input type="checkbox" className="cursor-pointer" name="terms" id="terms" /> I agree to Dutiful's <Link to={"/home"} className="text-violet underline">terms and conditions</Link></p>
                        <button type='submit' className='bg-grapePurple log-button py-[26px] px-[88px] rounded-md text-white font-circular font-medium text-lg'>Sign up</button>
                        <p className='text-center font-circular text-base font-normal text-blueGray'>Already have an account? <Link to={'/login'} className='text-royalPurple'>Login</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUp;