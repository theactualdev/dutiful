import eye from '/eye.svg';
import blindEye from "/blind-eye.svg"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './firebase/auth';


function Login(){
    const [passType, setpassType] = useState("text")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const hidePassword = () => {
        passType === "text" ? setpassType("password") : setpassType("text")
    }
    const navigate = useNavigate();

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        try{
            const userCredentials = await doSignInWithEmailAndPassword(email, password)
            navigate("/home")
            console.log(userCredentials.user)
            console.log()
        }catch(error: any){
            console.log(error, "error")
        }

    }
    return(
        <form className='mb-20' onSubmit={(e) => handleSubmit(e)}>
            <div className="wrapper flex w-full mt-[72px] items-center justify-center">
                <div className="card flex flex-col text-left gap-8">
                    <div className="text flex flex-col gap-3">
                        <p className='font-circular text-base font-normal text-gray'>Jump right back in</p>
                        <h1 className='font-semibold text-4xl font-recoleta-alt text-darkSlateBlue'>Login</h1>
                    </div>
                    <div className="form flex flex-col gap-6">
                        <div className="input flex flex-col gap-2">
                            <label htmlFor="email" className='font-circular text-base font-medium text-royalPurple'>Email</label>
                            <input type="email" onChange={(e) => setemail(e.target.value)} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 h-[56px]' />
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='font-circular text-base font-medium text-royalPurple'>Password</label>
                            <div className="in relative">
                                <input onChange={(e) => setpassword(e.target.value)} type={passType} className='bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 h-[56px]' />
                                <img src={passType === "text" ? eye : blindEye} className='absolute right-4 cursor-pointer top-1/3' alt="view password"  onClick={hidePassword}/>
                            </div>
                        </div>
                        <Link to={"/forgotpassword"} className='font-circular text-sm text-violet text-right'>Forgot password?</Link>
                        <button type='submit' className='bg-grapePurple log-button py-[26px] px-[88px] rounded-md text-white font-circular font-medium text-lg'>Login</button>
                        <p className='text-center font-circular text-base font-normal text-blueGray'>Don't have an account? <Link to={'/signup'} className='text-royalPurple'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;