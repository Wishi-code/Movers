import { FaTruck, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

function Contact() {
  return (
    <footer className="text-white bg-blue-950">
      
      <div className="px-6 py-10 mx-auto max-w-7xl md:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              
              {/* Truck Logo */}
              <div className="text-3xl text-orange-500">
                <FaTruck />
              </div>

              <div>
                <h3 className="text-xl font-bold leading-none">
                  MOVE
                  <span className="text-orange-500">AUS</span>
                </h3>

                <p className="text-gray-300 ">
                  REMOVALS AND STORAGE
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-6 text-gray-300">
              Reliable, professional and affordable moving services for homes
              and businesses across Africa.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition border border-gray-500 rounded-full hover:bg-orange-500 hover:border-orange-500"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition border border-gray-500 rounded-full hover:bg-orange-500 hover:border-orange-500"
              >
                <FaXTwitter className="text-sm" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition border border-gray-500 rounded-full hover:bg-orange-500 hover:border-orange-500"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition border border-gray-500 rounded-full hover:bg-orange-500 hover:border-orange-500"
              >
                <CiYoutube className="text-lg" />
              </a>
            </div>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="transition hover:text-orange-500">
                Local Removals
              </li>
              <li className="transition hover:text-orange-500">
                Interstate Removals
              </li>
              <li className="transition hover:text-orange-500">
                Office Relocations
              </li>
              <li className="transition hover:text-orange-500">
                Furniture Removals
              </li>
              <li className="transition hover:text-orange-500">
                Packing & Unpacking
              </li>
              <li className="transition hover:text-orange-500">
                Storage Solutions
              </li>
              <li className="transition hover:text-orange-500">
                Piano Moving
              </li>
            </ul>
          </div>


          {/* Local Moves */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase">
              Local Moves
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Kenya</li>
              <li>Eritrea</li>
              <li>Uganda</li>
              <li>Nigeria</li>
              <li>Rwanda</li>
              <li>Ethiopia</li>
              <li>Sudan</li>
              <li>South Africa</li>
            </ul>
          </div>


          {/* Interstate Moves */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase">
              Interstate Moves
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Kenya to Uganda</li>
              <li>Nigeria to Rwanda</li>
              <li>Sudan to South Africa</li>
              <li>Eritrea to Ethiopia</li>
              <li>Rwanda to Uganda</li>
              <li>And More...</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="font-medium text-white">1000 4 MOVE</span>
              </li>

              <li>
                <a href="mailto:info@moveaus.com">info@moveaus.com</a>
              </li>

              <li>
                Mon-Fri: 9AM - 5PM
              </li>

              <li>
                Sat: 10AM - 2PM
              </li>
            </ul>
          </div>

        </div>


        {/* Divider */}
        <div className="pt-5 mt-10 border-t border-blue-900">

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 md:flex-row">

            <p>
              &copy; 2023 MOVEAUS. All rights reserved.
            </p>

            <p>
              Designed by <span className="text-orange-500">4Business Group</span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Contact;