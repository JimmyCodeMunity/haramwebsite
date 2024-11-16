import React from 'react'

const HowWorks = () => {
  return (
    <div>
      <section id="works" class="relative bg-neutral-200 py-10 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-4xl text-black font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
                Simple and Interractive.
            </p>
        </div>
        <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"><img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"/>
            </div>
            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">
                            <img src="../images/downloading.png" alt="" />
                        </span>
                    </div>
                    <h3 class="mt-6 text-xl  text-slate-700 font-semibold leading-tight md:mt-10">Download App</h3>
                    <p class="mt-4 text-base text-gray-700 md:text-lg">
                    Go to playstore or App store and download App.
                    </p>
                </div>
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">
                        <img src="../images/account.png" alt="" />
                        </span>
                    </div>
                    <h3 class="mt-6 text-xl text-slate-700 font-semibold leading-tight md:mt-10">Use App</h3>
                    <p class="mt-4 text-base text-gray-700 md:text-lg">
                       Use our app now.
                    </p>
                </div>
                <div>
                    <div
                        class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700">
                        <img src="../images/use.png" alt="" />
                        </span>
                    </div>
                    <h3 class="mt-6 text-xl text-slate-700 font-semibold leading-tight md:mt-10">Publish it</h3>
                    <p class="mt-4 text-base text-gray-700 md:text-lg">
                        Use output as you like
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style="background:radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)">
    </div> */}
</section>
    </div>
  )
}

export default HowWorks
