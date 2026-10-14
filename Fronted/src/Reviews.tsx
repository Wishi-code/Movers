import { MdStar } from "react-icons/md";
import potrait from "./assets/potrait.jpg";
import potrait1 from "./assets/potrait1.jpg";
import potrait2 from "./assets/potrait2.jpg";

function Reviews() {
  const Card = [
    {
      icon: <><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></>,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: potrait,
      name: "-Sarah T",
      title: "Manager VIC"
    },
    {
      icon: <><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></>,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: potrait1,
      name: "-John Doe",
      title: "Sales Associate"
    },
    {
      icon: <><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></>,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: potrait2,
      name: "-Jane Smith",
      title: "Sales Associate"
    }
  ];

  return (
    <section className="p-8">

      <h3 className="mb-8 text-2xl font-bold text-center text-blue-950">
        What Our Customers Say
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {Card.map((item, index) => (
          <div
            className="p-6 bg-white shadow-lg rounded-xl"
            key={index}
          >

            {/* Stars */}
            <div className="flex mb-4 text-xl text-yellow-400">
              {item.icon}
            </div>

            {/* Review */}
            <p className="mb-6 leading-relaxed text-gray-600">
              {item.text}
            </p>

            {/* Customer */}
            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="object-cover rounded-full w-14 h-14"
              />

              <div>
                <h4 className="font-semibold text-blue-950">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.title}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;