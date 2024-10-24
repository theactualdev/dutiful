import mail from "/mail.svg";
import map from "/map.svg";
import phone from "/phone.svg";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: mail,
    header: "Customer support",
    content: "Please fill out the form below",
  },
  {
    icon: map,
    header: "Business address",
    content:
      "Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria",
  },
  {
    icon: phone,
    header: "Phone number",
    content: "+234 903 921 6724",
  },
];

function Contact() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [type, settype] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const userDetails = {
        name: name,
        email: email,
        type: type,
        subject: subject,
        message: message
    }

    const navigate = useNavigate();

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        try{
            await setDoc(doc(db, "messages", "email"), userDetails);
            navigate("/home")
        }catch(error: any){
            console.log(error)
        }
    };

  return (
    <>
      <div className="cta bg-grapePurple mt-4">
        <div className="wallpaper md:py-0 py-10 px-4 md:px-0 text-white flex justify-center items-center md:h-[268px] flex-col gap-4 bg-[url('/wallpaper.svg')]">
          <h1 className="font-semibold text-4xl font-recoleta-alt">
            Get in touch
          </h1>
          <p className="font-circular font-normal text-center text-xl text-palePurple">
            We are here to support you throughout the process of getting your
            business listed.
          </p>
        </div>
      </div>

      <section className="card flex md:flex-row md:gap-0 gap-10 flex-col justify-around text-center">
        {cards.map((card) => (
          <div className="rounded-xl px-[71px] h-[197px] flex flex-col justify-center md:relative bg-white -top-16 border border-[#EEEEFF]">
            <div className="head flex items-center gap-5">
              <img src={card.icon} alt={card.header} />
              <h2 className="font-circular text-2xl font-medium text-darkSlateBlue">
                Customer support
              </h2>
            </div>
            <div className="body">
              <p className="font-circular md:max-w-[345px] font-normal text-lg text-dimGray">
                {" "}
                {card.content}{" "}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="form mb-20">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="wrapper flex w-full items-center justify-center">
            <div className="card flex flex-col text-left gap-8">
              <div className="form flex flex-col gap-6">
                <div className="input flex flex-col gap-2">
                  <label
                    htmlFor="text"
                    className="font-circular text-base font-medium text-royalPurple"
                  >
                    Full nane
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setname(e.target.value)}
                    className="bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 h-[56px]"
                  />
                </div>
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
                    className="bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 h-[56px]"
                  />
                </div>
                <div className="input flex flex-col gap-2">
                  <label
                    htmlFor="type"
                    className="font-circular text-base font-medium text-royalPurple"
                  >
                    Business type <span className="italic"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => settype(e.target.value)}
                    className="bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 h-[56px]"
                  />
                </div>
                <div className="input flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="font-circular text-base font-medium text-royalPurple"
                  >
                    Subject
                  </label>
                  <Select onValueChange={(e) => setsubject(e)}>
                    <SelectTrigger className="bg-skyBlue md:w-[476px] h-[56px] focus:outline-none ">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="border-lavendarGray">
                        <SelectLabel>Subject</SelectLabel>
                        <SelectItem value="This could be a subject">This could be a subject</SelectItem>
                        <SelectItem value="Might be another subject">Might be another subject</SelectItem>
                        <SelectItem value="I think you know what this is">I think you know what this is</SelectItem>
                        <SelectItem value="hiii">hiii</SelectItem>
                        <SelectItem value="Sorry for the weird names, these weren't provided in the design">Sorry for the weird names, these weren't provided in the design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="input flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-circular text-base font-medium text-royalPurple"
                  >
                    Write your message
                  </label>
                    <textarea onChange={(e) => setmessage(e.target.value)} className="bg-skyBlue border-lavendarGray border-2 rounded-md md:w-[476px] focus:outline-none pl-4 md:h-[131px] py-4 resize-none" name="message"  id=""></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-grapePurple log-button py-[26px] px-[88px] rounded-md text-white font-circular font-medium text-lg"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
