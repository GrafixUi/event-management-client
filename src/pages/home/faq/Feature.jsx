
const Feature = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="/application.svg"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
            <p className="mb-5 text-5xl font-bold text-black">What we stand for</p>
              <div class="px-2 h-6 inline-flex items-center justify-center rounded-full bg-[#DAEAFF] text-[#2F4FB6] mb-5">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
               
                <p className="text-sm">Easy</p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Easy Ticketing:
                </h2>
                <p class="leading-relaxed text-base">
                Ticket 9 offers a straightforward ticketing process, making it simple for attendees to secure their spot at events hassle-free.
                </p>
                {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="px-2 h-6 inline-flex items-center justify-center rounded-full bg-[#DDFCE6] text-[#3A403D] mb-5">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
               
                <p className="text-sm">Experience</p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Engaging Experience:
                </h2>
                <p class="leading-relaxed text-base">
                Enjoy interactive features that enhance your event experience, ensuring you stay connected and entertained throughout.
                </p>
                {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="px-2 h-6 inline-flex items-center justify-center rounded-full bg-[#FFE3E2] text-[#A93B3A] mb-5">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg> */}
               
                <p className="text-sm">Effortlessly</p>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Discover with Ease:
                </h2>
                <p class="leading-relaxed text-base">
                Effortlessly explore and find events tailored to your interests, thanks to Ticket 9's user-friendly platform and personalized recommendations.
                </p>
                {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
