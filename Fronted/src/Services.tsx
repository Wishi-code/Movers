import { FaWineGlass } from "react-icons/fa6";
import { GiGrandPiano } from "react-icons/gi";
import { MdStore } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiArmchairLine } from "react-icons/ri";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { GiMatterStates } from "react-icons/gi";

function Services() {
    const services = [{
        icon: <GiMatterStates />,
        title: "Comprehensive Local Removals",
        description: "We provide efficient and reliable local moving services."
    },
    {  icon: <GiMatterStates />,
        title: "Interstate Removals",
        description: " Designed to make long-distance relocations stress-free."
    },
    {  icon: <RiHomeOfficeFill />,
        title: "Office Relocations",
        description: "Comprehensive office relocation services."
    },
    {   icon: <PiBuildingApartmentBold />,
        title: "Apartment Moves",
        description: "Provision of expert packing and transportation."  
    },
    {  icon: <RiArmchairLine />,
        title: "Furniture Removals",
        description: "Safe and efficient furniture removal services."
    },
    {   icon: <GiBoxUnpacking />,
        title: "Packing and Unpacking",
        description: "Professional packing to protect your homes."
    },
    {   icon: <MdStore />,
        title: "Storage Solutions",
        description: "Secure and flexible storage options for your belongings."
    },
    
    {   icon: <GiGrandPiano />,
        title: "Piano Moving",
        description: "Specialized services for moving pianos safely and efficiently."
    },
    {   icon: <FaWineGlass />,
        title: "Fragile Item Handling",
        description: "Expert handling of delicate and valuable items."
    }
    ]
  return (
    <section>
        <div className="text-center ">
      <h3 className="font-bold text 2xl text-blue-950">Our Moving Services</h3>
      <p className="text-sm ">Complete moving solutions for homes, apartments, and businesses across Africa.</p>
    </div>
    <div className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg-grid-cols-5 ">

  {services.map((service, index) => (
    <div
      key={index}
      className="p-4 text-center bg-white rounded-lg shadow-lg shadow-blue-950 "
    >
      <div className="flex justify-center text-5xl text-blue-950">
        {service.icon}
      </div>

      <h4 className="mt-4 font-semibold text-md text-blue-950">
        {service.title}
      </h4>

      <p className="text-sm text-gray-600 mt:-2 sm:hidden md:block">
        {service.description}
      </p>
    </div>
  ))}

</div>
    </section>
    
  )
}

export default Services
