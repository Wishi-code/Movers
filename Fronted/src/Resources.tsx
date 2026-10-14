import packed from "./assets/packed.jpg";
import lory from "./assets/lory.jpg";
import { MdOutlineChair } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

function Resources() {
  const customers = [
    {
      icon: <LiaPeopleCarrySolid />,
      text: "Experienced Movers",
    },
    {
      icon: <MdOutlineChair />,
      text: "Careful furniture handling",
    },
    {
      icon: <RiNewspaperLine />,
      text: "Fixed quote options",
    },
    {
      icon: <MdOutlineVerifiedUser />,
      text: "Fully insured",
    },
    {
      icon: <AiFillClockCircle />,
      text: "On-time arrival",
    },
    {
      icon: <FaTruck />,
      text: "Clean Moving Tracks",
    },
    {
      icon: <BsMicrosoftTeams />,
      text: "Friendly local team",
    },
  ];

  const Works = [
    {
      number: 1,
      title: "Request a Quote",
      text: "Tell us about your move and get a free quote from our team.",
    },
    {
      number: 2,
      title: "Confirm Details",
      text: "Confirm your moving date and details with our team.",
    },
    {
      number: 3,
      title: "Packing Support",
      text: " We pack your items safely",
    },
    {
      number: 4,
      title: "Moving Day",
      text: "Our team arrives on time and moves your items safely to your new home.",
    },
    {
      number: 5,
      title: "Safe Delivery",
      text: "We ensure your items are delivered safely and on time.",
    },
  ];

  return (
    <section>
      <h3 className="text-2xl font-bold text-blue-950">
        {" "}
        Why Customers Choose Us
      </h3>
      <div className="flex ">
        {customers.map((customer, index) => (
          <div key={index} className="flex gap-4 p-4">
            <div className="flex-col items-center">
              {" "}
              <div className="text-3xl text-blue-950">{customer.icon}</div>
              <p>{customer.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 p-4">
        <div className="text-white bg-blue-950">
          <h3 className="text-xl font-semibold text-white">
            Planning a <span className="text-orange-600 ">Move</span> Soon?
          </h3>
          <h3 className="text-white ">
            Get a fast obligation free quote from your local moving experts.
          </h3>
          <p className="p-2 ">Fast and free quotes</p>
          <p className="p-2">No hidden costs</p>
          <p className="p-2">Fully insured</p>
          <p className="p-2">Friendly local team</p>
        </div>
        <div>
          <form className="w-full max-w-4xl p-6 bg-white rounded-lg md:p-8">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-4 border border-gray-200 rounded-md outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full h-10 px-4 border border-gray-200 rounded-md outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Moving From
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-4 border border-gray-200 rounded-md outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Moving To
                </label>
                <input
                  type="text"
                  className="w-full h-10 px-4 border border-gray-200 rounded-md outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Property Type
                </label>
                <select className="w-full h-10 px-4 text-gray-500 bg-white border border-gray-200 rounded-md outline-none focus:border-orange-500">
                  <option value="">Select...</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Moving Date
                </label>
                <input
                  type="date"
                  className="w-full h-10 px-4 text-gray-500 border border-gray-200 rounded-md outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Items to Move
              </label>
              <textarea
                placeholder="e.g. 3 Bedroom House, Furniture, Fragile Items, Etc."
                className="w-full px-4 py-2 border border-gray-200 rounded-md outline-none resize-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-12 mt-1 text-lg font-bold text-white transition bg-orange-500 rounded-md hover:bg-orange-600"
            >
              GET MY FREE QUOTE <span className="ml-2"></span>
            </button>
            <p>
              <CiLock />
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl bg-gray-50 min-h-80">
            <div className="relative z-10 p-7 md:p-9 max-w-[65%]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#06295c] mb-4">
                Modern Moving Fleet
              </h2>

              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                Clean, well-maintained trucks in various sizes to handle any
                move.
              </p>
            </div>

            <img
              src={lory}
              alt="Modern moving trucks"
              className="absolute bottom-0 left-0 w-[75%] md:w-[70%] object-contain"
            />
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gray-50 min-h-80">
            <div className="relative z-10 p-7 md:p-9 max-w-[65%]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#06295c] mb-4">
                Quality Packing Materials
              </h2>

              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                High-quality boxes, wraps and packing materials for maximum
                protection.
              </p>
            </div>

            <img
              src={packed}
              alt="Quality packing materials"
              className="absolute bottom-0 right-0 w-[45%] md:w-[42%] object-contain"
              />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092A54]">
            How It Works
          </h2>

          {/* Orange underline */}
          <div className="w-12 h-1 mx-auto mt-3 bg-orange-400 rounded-full"></div>
        </div>

        {/* Steps */}
        <div className="flex flex-col items-start justify-between md:flex-row">
          {Works.map((work, index) => (
            <div
              key={work.number}
              className="relative flex-1 w-full text-center"
            >
              {/* Number + Connecting Line */}
              <div className="flex items-center justify-center">
                {/* Left line */}
                {index !== 0 && (
                  <div className="flex-1 hidden border-t-2 border-gray-300 border-dotted md:block"></div>
                )}

                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-[#092A54] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {work.number}
                </div>

                {/* Right line */}
                {index !== Works.length - 1 && (
                  <div className="flex-1 hidden border-t-2 border-gray-300 border-dotted md:block"></div>
                )}
              </div>

              {/* Text */}
              <div className="px-4 mt-5">
                <h3 className="text-base font-bold text-[#092A54]">
                  {work.title}
                </h3>

                <p className="mx-auto mt-2 text-sm leading-relaxed text-gray-500 max-w-45">
                  {work.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
