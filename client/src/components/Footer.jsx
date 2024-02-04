import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-4">
        <div className="mb-8 grid lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
            {/* Category 1 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    ECommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entrepreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscription */}
          <div className="mt-5 md:max-w-md lg:col-span-2 lg:mt-0">
            <p className="font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="mb-3 aspect-auto h-12 w-full flex-grow rounded border border-gray-300 bg-white px-4 shadow-sm transition duration-200 focus:border-purple-400 focus:outline-none md:mb-0 md:mr-2 "
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded border px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-orange-500 focus:outline-none"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
              veritatis et laudantium! Eligendi, facere at aut error sit,
              molestias unde quam eveniet tenetur assumenda asperiores rerum
              amet possimus similique quos, accusantium necessitatibus ipsum
              cumque consectetur! Nostrum modi distinctio, illum et dolore
              corrupti molestias pariatur expedita quo, atque beatae error!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between border-t border-gray-800 pb-10 pt-5 sm:flex-row">
          <p className="text-sm text-gray-500">
            &#169; Copyright 2024 | All right reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
