import { Link } from "react-router-dom";
import tick from "/tick.svg";
import purpleTick from "/purple-tick.svg"
import no from "/no.svg"

const plans = [
    {
        name: "basic",
        price: "free",
        dashboard: true,
        business: 2,
        products: 2,
        images: 2,
        keywords: true,
        serviceHours: true,
        instantChat: true,
        reviews: true,
        visibility: true,
        notifications: true,
        displaySite: true,
        quotes: true,
        bookmarks: true
    },
    {
        name: "standard",
        price: "20,000",
        dashboard: true,
        business: 6,
        products: 6,
        images: 4,
        keywords: true,
        serviceHours: true,
        instantChat: true,
        reviews: true,
        visibility: true,
        notifications: true,
        displaySite: true,
        quotes: true,
        bookmarks: true,
        profileViews: true,
        badgePurple: true,
        badgeGold: false,
        appointments: true,
        latestOffers: true
    },
    {
        name: "premium",
        price: "30,000",
        dashboard: true,
        business: 10,
        products: 10,
        images: 6,
        keywords: true,
        serviceHours: true,
        instantChat: true,
        reviews: true,
        visibility: true,
        notifications: true,
        displaySite: true,
        quotes: true,
        bookmarks: true,
        profileViews: true,
        badgePurple: false,
        badgeGold: true,
        appointments: true,
        latestOffers: true,
        support: true
    }
]

function Features() {
    return (
      <>
        <section className="project flex flex-col mx-4 md:mx-0 items-center mt-10 text-darkSlateBlue gap-4 pb-10 md:pb-[95px]">
          <h1 className="font-recoleta-alt font-semibold text-2xl md:text-4xl text-center">
            Plans to Suit Your Business Budget
          </h1>
          <p className="text-center font-circular font-normal text-lg md:text-xl max-w-[888px]">
            Our fully organized plans deliver valuable content that showcases your
            services and skills, drives Lead, covers all features, and gives
            customers a clear idea to be able to choose your services.
          </p>
        </section>
  
        <section className="pricing bg-[#FCFAFF] grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0 md:pt-[95px]">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card bg-white w-full px-4 rounded-md flex flex-col gap-6 pt-6 pb-6 md:pt-[75px] ${
                plan.support && "pb-10"
              }`}
            >
              <div className="text flex flex-col gap-4 mb-4">
                <p className="capitalize text-left font-circular font-medium text-lg md:text-[22px]">
                  {plan.name}
                </p>
                <p
                  className={`capitalize font-semibold font-recoleta-alt text-3xl md:text-[48px] relative ${
                    plan.price !== "free" && "ml-6 pl-12 md:pl-0 md:ml-11"
                  }`}
                >
                  <span className="text-base absolute top-2 left-0 md:-left-10">
                    {plan.price !== "free" && "NGN"}
                  </span>{" "}
                  {plan.price}{" "}
                  <span className="lowercase text-lg md:text-xl">
                    {plan.price !== "free" && "/year"}
                  </span>{" "}
                </p>
                <Link
                  to={"/signup"}
                  className="rounded-md py-4 px-6 md:py-[26px] md:px-[140px] bg-grapePurple font-circular font-medium text-lg text-white text-center"
                >
                  Get Started
                </Link>
              </div>
  
              <div className="check flex flex-col gap-4">
                {plan.dashboard && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Access to dashboard
                  </p>
                )}
                {plan.business && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Add up to {plan.business} businesses
                  </p>
                )}
                {plan.products && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Add up to {plan.products} products/services
                  </p>
                )}
                {plan.images && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Add up to {plan.images} Images
                  </p>
                )}
                {plan.keywords && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Unlimited Keywords
                  </p>
                )}
                {plan.serviceHours && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Display serivce hours and prices
                  </p>
                )}
                {plan.serviceHours && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Display address, contact and email
                  </p>
                )}
                {plan.instantChat && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Instant chat
                  </p>
                )}
                {plan.reviews && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Reviews and ratings
                  </p>
                )}
                {plan.visibility && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Profile visibility
                  </p>
                )}
                {plan.notifications && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Instant notifications
                  </p>
                )}
                {plan.displaySite && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Display website and social network
                  </p>
                )}
                {plan.quotes && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Quotes
                  </p>
                )}
                {plan.bookmarks && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Bookmarks
                  </p>
                )}
                {plan.profileViews && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Number of profile views
                  </p>
                )}
                {(plan.badgeGold || plan.badgePurple) && (
                    <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    <p>Verified Badge ({plan.badgeGold ? "Gold" : "purple"})</p>
                  </p>
                )}
                {plan.appointments && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Accept & Sell appointment
                  </p>
                )}
                {plan.latestOffers && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    Latest offers
                  </p>
                )}
                {plan.support && (
                  <p className="font-normal text-lg md:text-xl font-circular text-dimGray flex gap-4 md:gap-6">
                    <span>
                      <img src={tick} alt="Tick" />
                    </span>
                    24/7 service and support
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
  
        <section className="overview bg-[#FCFAFF] pt-10 pb-12 px-4 md:px-[56px]">
          <h2 className="font-circular font-medium text-2xl md:text-4xl text-center md:text-left">
            Features Overview
          </h2>
          <div className="flex flex-col gap-8 mt-8">
            <div className="row flex flex-col gap-6 md:gap-0 md:flex-row justify-between bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
                Access to dashboard
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.dashboard ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col gap-6 md:gap-0 md:flex-row justify-between p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              No. of business listings
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.business ? (
                        <p className="font-circular font-normal md:text-xl">{plan.business} businesses</p>
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row gap-6 md:gap-0 justify-between bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              No. of products/services
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.products ? (
                        <p className="font-circular font-normal text-xl">{plan.products} </p>
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row gap-6 md:gap-0 justify-between p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              No. of Images
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.images ? (
                        <p className="font-circular font-normal text-xl">{plan.images} </p>
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row gap-6 md:gap-0 justify-between bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
                Keywords
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.keywords ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Display service hours & prices
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.serviceHours ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Display address, email & contact
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.serviceHours ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Instant chat
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.instantChat ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Reviews & ratings
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.reviews ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Profile visibility
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.visibility ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between bg-white gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Instant notifications
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.notifications ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Display website & social network
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.displaySite ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between bg-white gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Quotes
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.quotes ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Bookmarks
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.bookmarks ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Profile views
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.profileViews ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Verified badge
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {(plan.badgeGold || plan.badgePurple) ? (
                      <p className="font-circular font-normal text-xl"> {plan.badgeGold ? "Gold" : "Purple"} </p>
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Latest offers
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.latestOffers ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0  p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              Accept & sell appointment
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.appointments ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="row flex flex-col md:flex-row justify-between gap-6 md:gap-0 bg-white p-4 rounded-md">
              <div className="col font-normal text-lg md:text-xl font-circular text-dimGray">
              24/7  support
              </div>
              <div className="in-col flex justify-around md:justify-between w-full md:w-[987px]">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className="col flex justify-center w-1/3 md:w-[240px]"
                  >
                    {plan.support ? (
                      <img src={purpleTick} alt="True" />
                    ) : (
                      <img src={no} alt="False" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Repeat for other features */}
          </div>
        </section>
      </>
    );
  }
  
  export default Features;
  