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

function Features(){
    return(
        <>
            <section className="project flex flex-col items-center mt-[69px] text-darkSlateBlue gap-4 md:pb-[95px]">
                <h1 className="font-recoleta-alt font-semibold text-4xl">Plans to Suit Your Business Budget</h1>
                <p className="md:max-w-[888px] text-center font-circular font-normal text-xl">Our fully organized plans deliver valuable content that showcases your services and skills, drives Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>
            </section>
            
            <section className="pricing bg-[#FCFAFF] flex justify-around md:pt-[95px] pb-10">
                {plans.map((plan) => (
                    <div className={`card bg-white w-[414px] px-4 rounded-md flex flex-col gap-6 pt-[75px] ${plan.support && "pb-10"} `}>
                        <div className="text flex flex-col gap-4 mb-4">
                            <p className="capitalize text-left font-circular font-medium text-[22px]">{plan.name}</p>
                            <p className={`capitalize font-semibold font-recoleta-alt text-[48px] relative ${plan.price !== "free" && "ml-11"} `}> <span className="text-base absolute top-2 -left-10"> {plan.price !== "free" && "NGN"} </span> {plan.price} <span className="lowercase text-xl"> {plan.price !== "free" && "/year"} </span> </p>
                            <Link to={"/signup"} className="rounded-[6px] py-[26px] px-[140px] bg-grapePurple font-circular font-medium text-lg text-white">Get Started</Link>
                        </div>
                        <div className="check flex flex-col gap-6">
                            {plan.dashboard && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Access to dashboard</p>}
                            {plan.business && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Add up to {plan.business} businesses</p>}
                            {plan.products && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Add up to {plan.products} products/services</p>}
                            {plan.images && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Add up to {plan.images} images</p>}
                            {plan.keywords && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Unlimited keywords</p>}
                            {plan.serviceHours && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Display service hours and prices</p>}
                            {plan.instantChat && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Display address, contact and email</p>}
                            {plan.instantChat && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Instant chat</p>}
                            {plan.reviews && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Reviews and ratings</p>}
                            {plan.visibility && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Profile visibility</p>}
                            {plan.notifications && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Instant notifications</p>}
                            {plan.displaySite && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Display website and social network</p>}
                            {plan.quotes && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Quotes</p>}
                            {plan.bookmarks && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Bookmarks</p>}
                            {plan.profileViews && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Number of profile views</p>}
                            {plan.badgePurple && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Verified badge (purple)</p>}
                            {plan.badgeGold && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Verified badge (Gold)</p>}
                            {plan.appointments && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Accept & Sell appointment</p>}
                            {plan.latestOffers && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> Latest offers</p>}
                            {plan.support && <p className="font-normal text-xl font-circular text-dimGray flex gap-6"><span><img src={tick} alt="Tick" /></span> 24/7 service and support</p>}
                        </div>
                    </div>
                ))}
            </section>

            <section className="overview bg-[#FCFAFF] pt-[46px] pb-12 px-[56px]">
                <h2 className="font-circular font-medium text-4xl">Features Overview</h2>
                <div className="flex flex-col gap-10">
                    <div className="row flex justify-around items-end">
                        <div className="col font-circular font-normal text-2xl text-dimGray">Features & Services</div>
                        {plans.map((plan) => (
                            <div className="col flex flex-col gap-6">
                                <p className="capitalize font-circular font-medium text-[22px] text-left"> {plan.name} </p>
                                <Link to={"/"} className="py-[14px] px-[80px] rounded-md bg-grapePurple">Get started</Link>
                            </div>
                        ))}
                    </div>
                    <div className="rows flex flex-col pl-6 gap-8">
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Access to dashboard</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.dashboard ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">No. of business listings</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.business && <p className="font-circular font-normal text-xl"> {plan.business} businesses</p> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px]  text-dimGray">No. of products/services</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.products && <p className="font-circular font-normal text-xl"> {plan.products}</p> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">No. of Images</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.images && <p className="font-circular font-normal text-xl"> {plan.images}</p> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Keywords</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.images ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Display service hours & prices</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.serviceHours ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-lg font-circular md:w-[292px] text-dimGray">Display address, email & contact</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.serviceHours ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Instant chat</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.instantChat ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Reviews & ratings</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.reviews ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Profile visibility</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.visibility ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Instant notifications</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.notifications ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-lg font-circular md:w-[292px] text-dimGray">Display website & social network</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.displaySite ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Quotes</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.quotes ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Bookmarks</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.bookmarks ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Profile views</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.profileViews ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Verified badge</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { (plan.badgeGold) && <p className="text-xl font-normal font-circular">Gold</p> }
                                        { (plan.badgePurple) && <p className="text-xl font-normal font-circular">Purple</p> }
                                        { (!plan.badgePurple && !plan.badgeGold) && <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Latest offers</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.latestOffers ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">Accept & sell appointment</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.appointments ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row flex justify-around items-end py-4 rounded-md bg-white">
                            <div className="col font-normal text-xl font-circular md:w-[292px] text-dimGray">24/7  support</div>
                            <div className="in-col flex md:w-[987px] w-full justify-between">
                                {plans.map((plan) => (
                                    <div className="col flex md:w-[240px] justify-center">
                                        { plan.support ? <img src={purpleTick} alt="True" /> : <img src={no} alt="False" /> }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;