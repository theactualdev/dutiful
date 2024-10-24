import { Link } from "react-router-dom";
import sent from "/sent.svg";

function Reset() {
  return (
    <div className="wrapper flex justify-center h-screen">
        <div className="card flex flex-col gap-10  justify-center items-center">
            <div className="img">
                <img
                    src={sent}
                    alt="Email sent"
                    className="p-10 bg-[#F8F3FF] rounded-full"
                />
            </div>
            <p className="font-circular md:max-w-[408px] text-center text-lg font-normal text-dimGray">
                An OTP code has been sent to your mail. Check your email to
                get the code
            </p>
            <div className="button">
                <Link to={"/login"} className="px-[88px] py-[26px] bg-grapePurple rounded-md text-white font-circular font-medium text-lg">Next</Link>
            </div>
        </div>
    </div>
  );
}

export default Reset;
