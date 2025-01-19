import dashboard from "/dashboard.svg";
import ratings from "/ratings.svg";
import features from "/features.svg";
import appointments from "/appointments.svg";

function Home() {
  return (
    <>
      <section className="dashboard flex flex-col md:flex-row justify-around mx-4 m:mx-0 items-center mt-[45px]">
        <div className="text-container flex flex-col gap-4 md:max-w-[559px]">
            <h1 className="font-recoleta-alt font-bold text-[26px] md:text-4xl text-midnightPurple md:max-w-[481px]">List and grow your business  with just few clicks</h1>
            <p className="text-charcoalGray font-circular font-normal text-base md:text-xl">Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.</p>
        </div>
        <div className="image-container">
            <img src={dashboard} width={674} height={602} alt="DashBoard" />
        </div>
      </section>

      <section className="ratings mt-10 flex md:flex-row flex-col-reverse mx-4 md:mx-0 justify-around items-center">
        <div className="image-container">
            <img src={ratings} width={767} height={773} alt="Ratings" />
        </div>
        <div className="text-container md:max-w-[557px] flex flex-col gap-4">
            <h2 className="font-recoleta-alt font-bold text-darkSlateBlue text-[25px] md:text-4xl md:max-w-[536px]">Collect reviews and ratings from customers</h2>
            <p className="font-circular font-normal text-dimGray md:text-xl">Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
        </div>
      </section>

      <section className="features flex items-center justify-center">
        <img src={features} width={1312} height={886} alt="Features" />
      </section>

      <section className="appointments flex md:flex-row flex-col-reverse mx-4 md:mx-0 gap-6 md:gap-0 items-center justify-around mt-11">
        <div className="image-container">
            <img src={appointments} width={521} height={477} alt="Appointments" />
        </div>
        <div className="text-container md:max-w-[557px] flex flex-col gap-4">
            <h2 className="text-darkSlateBlue font-bold font-recoleta-alt text-4xl">Accept and sell appointments</h2>
            <p className="text-dimGray text-xl font-normal font-circular">Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. </p>
        </div>
      </section>
    </>
  );
}

export default Home;
