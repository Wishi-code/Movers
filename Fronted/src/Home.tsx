import Movers from "./assets/movers.jpg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { AiFillDribbbleSquare } from "react-icons/ai";

function Home() {
  const homeData = [
    {
      icon: <MdOutlineVerifiedUser />,
      title: "Fully Insured",
      description: "Peace of mind",
    },
    {
      icon: <FaRegStar />,
      title: "5-Star Rating",
      description: "By Australia",
    },
    {
      icon: <IoMdClock />,
      title: "On-time Service",
      description: "Every Time",
    },
    {
      icon: <AiFillDribbbleSquare />,
      title: "Careful & Reliable",
      description: "Local Experts",
    },
  ];

  return (
    <section>
      <div className="flex ">
        <div className="">
          <p className="text-xl font-bold text-blue-950">Stress-free</p>
          <p className="text-xl font-bold text-orange-600">Moving Services</p>
          <p className="text-xl font-bold text-blue-950">for Homes &</p>
          <p className="text-xl font-bold text-blue-950">Businesses</p>
          <div>
            <p className="text-black">
              Local moves, interstate moves, office relocations{" "}
            </p>
            <p className="text-black">
              packing services,furniture removals, storage{" "}
            </p>
            <p className="text-black">
              solutions and careful handlinng you can trust
            </p>
          </div>

          <div className="flex gap-4 p-4 ">
            <button className="px-4 py-2 font-semibold bg-orange-600 rounded-lg">
              GET A MOVING QUOTE
            </button>
            <button className="px-4 py-2 font-semibold border rounded-lg text-blue-950 border-blue-950">
              VIEW OUR SERVICES
            </button>
          </div>
        </div>
        <div>
          <img
            src={Movers}
            alt="Movers"
            className="items-center object-cover h-full rounded-lg w-120"
          />
        </div>
      </div>
      <div className="flex gap-4 p-4 text-center justif">
        {homeData.map((item, index) => (
          <div key={index} className="flex flex-col pl-4 ">
            <div className="text-5xl text-blue-950">{item.icon}</div>
            <p className="font-bold">{item.title}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
