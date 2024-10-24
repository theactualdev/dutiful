import dashboard from "/dashboard.svg";
import ratings from "/ratings.svg";
import features from "/features.svg";
import appointments from "/appointments.svg";

function Home() {
  return (
    <>
      <section className="dashboard flex justify-around items-center md:mt-[45px]">
        <div className="text-container flex flex-col gap-4 md:max-w-[559px]">
            <h1 className="font-recoleta-alt font-bold text-4xl text-midnightPurple md:max-w-[481px]">List and grow your business  with just few clicks</h1>
            <p className="text-charcoalGray font-circular font-normal text-xl">Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.</p>
        </div>
        <div className="image-container">
            <img src={dashboard} alt="DashBoard" />
        </div>
      </section>

      <section className="ratings md:mt-10 flex justify-around items-center">
        <div className="image-container">
            <img src={ratings} alt="Ratings" />
        </div>
        <div className="text-container md:max-w-[557px] flex flex-col gap-4">
            <h2 className="font-recoleta-alt font-bold text-darkSlateBlue text-4xl md:max-w-[536px]">Collect reviews and ratings from customers</h2>
            <p className="font-circular font-normal text-dimGray text-xl">Accelerate your business reputation by 90% and gain social proof through reviews and ratings requested from customers.</p>
        </div>
      </section>

      <section className="features flex items-center justify-center">
        <img src={features} alt="Features" />
      </section>

      <section className="appointments flex items-center justify-around md:mt-11">
        <div className="image-container">
            <img src={appointments} alt="Appointments" />
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
