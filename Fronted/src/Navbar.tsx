
import { useEffect, useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import QuoteForm from "./QuoteForm";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scroll, SetScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        SetScroll(true);
      } else {
        SetScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {quoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-lg rounded-xl bg-white p-6">
            <button
              onClick={() => setQuoteOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              <FaX />
            </button>

            <h2 className="text-2xl font-bold text-blue-950">
              Get your Free Quote
            </h2>

            <p className="mt-2 text-gray-600">
              Get a fast, obligation-free quote from our team.
            </p>

            <QuoteForm />
          </div>
        </div>
      )}

      <header
        className={`sticky left-0 top-0 z-50 w-full ${
          scroll ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between bg-blue-950 px-4 py-2 text-white">
          <div className="flex gap-4">
            <p className="flex">
              <span className="p-2">
                <MdOutlinePhone />
              </span>
              1300 4 MOVE
            </p>

            <p className="flex">
              <span className="p-2">
                <GoMail />
              </span>
              <a href="mailto:info@moveaus.com.au">
                info@moveaus.com.au
              </a>
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p>
              Fully Insured <span className="pl-2 text-orange-500">.</span>
            </p>
            <p>
              No Hidden Fees <span className="pl-2 text-orange-500">.</span>
            </p>
            <p>5-Star Rating</p>
          </div>

          <button
            onClick={() => setQuoteOpen(true)}
            className="rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700"
          >
            GET A QUOTE
          </button>
        </div>

        <div className="flex gap-8 border-b-2 px-4 py-2">
          <div>
            <p className="text-xl font-bold text-blue-950">
              MOVE<span className="text-orange-500">AUS</span>
            </p>
            <p className="text-sm text-blue-800">
              REMOVALS AND STORAGE
            </p>
          </div>

          <div className="hidden justify-between gap-10 p-4 text-md text-blue-800 md:flex">
            <a href="#home">Home</a>

            <div className="relative">
              <a
                href="/services"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services
              </a>

              {serviceOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg">
                  <a href="/services/local" className="block px-4 py-2 hover:bg-gray-100">
                    Local Removals
                  </a>
                  <a href="/services/interstate">Interstate Removals</a>
                  <a href="/services/office">Office Relocations</a>
                  <a href="/services/apartment">Apartment Moves</a>
                  <a href="/services/furniture">Furniture Removals</a>
                  <a href="/services/packing">Packing and Unpacking</a>
                  <a href="/services/storage">Storage Solutions</a>
                </div>
              )}
            </div>

            <div className="relative">
              <a
                href="/resources"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
              </a>

              {resourcesOpen && (
                <div className="absolute left-0 top-full bg-white shadow-lg">
                  <a href="/resources/moving" className="block px-4 py-2 hover:bg-gray-100">
                    Moving Tips
                  </a>
                  <a href="/resources/packing">Packing Tips</a>
                  <a href="/resources/storage">Storage Tips</a>
                </div>
              )}
            </div>

            <a href="/reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="absolute right-4 block cursor-pointer md:hidden">
            {isOpen ? (
              <FaX size={24} onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <FaBars size={24} onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
        </div>

        <div>
          {isOpen && (
            <div
              className={`flex flex-col gap-4 p-4 text-md text-blue-800 md:hidden ${
                isOpen ? "block bg-blue-500" : "hidden"
              }`}
            >
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
              <a href="/resources" onClick={() => setIsOpen(false)}>Resources</a>
              <a href="/reviews" onClick={() => setIsOpen(false)}>Reviews</a>
              <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
