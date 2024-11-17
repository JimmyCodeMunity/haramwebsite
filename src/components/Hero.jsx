import React from "react";
import * as Icon from 'react-feather'

const Hero = () => {
  return (
    <div className="w-full">
      <div class="h-screen w-screen bg-neutral-200">
        <div class="mx-auto pt-16 sm:pt-24">
          <div class="space-y-6 lg:space-y-0 md:grid md:grid-cols-12 md:gap-8 flex flex-row">
            <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div class="space-y-8">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <span class="rounded-full uppercase bg-red-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Download App
                    </span>
                    <h1 class="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                      <span class="sm:text-6xl"></span> The Best Way To get
                      <span class="font-extrabold text-red-500"> Wherever</span>
                      <br />
                      you want.
                    </h1>
                  </div>

                  <p class="text-base text-neutral-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Welcome to Haram'ad, where every journey is designed to be
                    safe, timely, and affordable. Whether you're commuting to
                    work, heading out for a night on the town, or catching a
                    flight, we've got you covered with reliable drivers and
                    seamless bookings. Experience comfort, trust, and efficiency
                    with every ride. Your destination is just a tap away—let us
                    take you there!
                  </p>
                </div>

                <div class="border-t border-gray-700"></div>

                <div class="flex space-x-4 items-center text-black">
                  <div class="flex items-center space-x-2">
                    <div class="flex flex-shrink-0 -space-x-1">
                      <img
                        loading="lazy"
                        width="400"
                        height="400"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/29.jpg"
                      />
                      <img
                        loading="lazy"
                        width="400"
                        height="400"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/90.jpg"
                      />
                      <img
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                      />
                      <img
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                      />
                    </div>

                    <span class="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>

                  <div class="h-4 border-l border-gray-700"></div>

                  <div class="flex items-center">
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div class="h-4 border-l border-gray-700"></div>
                  <div className="w-full md:block hidden flex-flex-row items-center space-x-4">
                    <a href="">
                      <div
                        href=""
                        className="h-12 w-60 flex bg-red-500 rounded-xl justify-center items-center text-white text-xl font-semibold"
                      >
                        <Icon.Download color="white" size={20}/>{" "}
                        Download App
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full md:hidden block flex-flex-row items-center space-x-4">
                    <a href="">
                      <div
                        href=""
                        className="h-12 w-full flex space-x-2 bg-red-500 rounded-xl justify-center items-center text-white text-xl font-semibold"
                      >
                        <Icon.Download color="white" size={20}/>{" "}
                        Download App
                      </div>
                    </a>
                  </div>
              </div>
            </div>

            <div class="flex items-center w-full col-span-6">
              <div class="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div className="w-full h-full">
                  <div className="w-full h-full">
                    <img src="../images/sig.png" className="object-fit" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
