import { useState } from "react";
import { Link } from "react-router-dom";
import { doPasswordReset } from "./firebase/auth";
import { useNavigate } from "react-router-dom";


function Forgot() {
    const [email, setemail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try{
            await doPasswordReset(email);
            navigate("/passreset");
        }catch(error: any){
            console.log(error)
        }
    }

  return (
    <form className="mb-20" onSubmit={(e) => handleSubmit(e)}>
      <div className="wrapper flex w-full mt-[72px] items-center justify-center">
        <div className="card md:max-w-[459px] flex flex-col text-left gap-8">
          <div className="text flex flex-col-reverse gap-3">
            <p className="font-circular text-base font-normal text-gray">
              Enter your email and well send you a mail on how to reset your
              password.
            </p>
            <h1 className="font-semibold text-4xl font-recoleta-alt text-darkSlateBlue">
              Forgot password
            </h1>
          </div>
          <div className="form flex flex-col gap-6">
            <div className="input flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-circular text-base font-medium text-royalPurple"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                className="bg-skyBlue border-lavendarGray border-2 rounded-md md:w-full focus:outline-none pl-4 md:h-[56px]"
              />
            </div>
            <button
              type="submit"
              className="bg-grapePurple log-button py-[26px] px-[88px] rounded-md text-white font-circular font-medium text-lg"
            >
              Send email
            </button>
            <p className="text-center font-circular text-base font-normal text-blueGray">
              Or{" "}
              <Link to={"/login"} className="text-royalPurple">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Forgot;
