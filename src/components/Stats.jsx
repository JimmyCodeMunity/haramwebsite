import React from "react";

const Stats = () => {
  return (
    <div>
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-10 xl:gap-14 lg:flex-row lg:justify-between">
            <div class="w-full lg:w-1/3 ">
              <div class="font-manrope font-bold text-5xl text-red-600 mb-6 text-center ">
                60K+
              </div>
              <p class="text-lg text-gray-500 leading-7 text-center">
              Users using Haramad all over the globe.
              </p>
            </div>
            <div class="w-full lg:w-1/3 ">
              <div class="font-manrope font-bold text-5xl text-red-600 mb-6 text-center ">
                50K+
              </div>
              <p class="text-lg text-gray-500 leading-7 text-center">
              Downloads every month
              </p>
            </div>
            <div class="w-full lg:w-1/3 ">
              <div class="font-manrope font-bold text-5xl text-red-600 mb-6 text-center ">
                98%
              </div>
              <p class="text-lg text-gray-500 leading-7 text-center">
                Our user are satisfied using our services in their daily site
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
