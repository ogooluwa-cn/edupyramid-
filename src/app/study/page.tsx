import React from "react";

export default function Study() {
  return (
    <div className="mt-24 text-center bg-[#0C1222] w-full py-16 px-4 text-white">
      <h1 className="font-poppins text-[28px] sm:text-[36px] md:text-[40px] font-bold">
        Why study with us?
      </h1>
      <p className="mt-4 font-poppins text-base md:text-lg max-w-2xl mx-auto text-gray-300">
        Supercharge your skills: Discover why learning with us isn't just smart, but it’s a Game Changer!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16">
        {/* Card 1 */}
        <div className="w-full md:w-[300px] bg-[#10172C] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-200 border border-[#1E293B]">
          <img
            src="/icons/light.png"
            alt="Learn From The Best"
            className="w-[60px] h-[60px] mx-auto mb-6"
          />
          <h3 className="text-lg font-semibold mb-2 text-white">Learn From The Best</h3>
          <p className="text-gray-400 text-sm">
            Industry professionals, real-world projects, and hands-on mentorship — everything you need to learn the right way, from day one.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[300px] bg-[#10172C] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-200 border border-[#1E293B]">
          <img
            src="/icons/hand.png"
            alt="Skills That Get You Hired"
            className="w-[60px] h-[60px] mx-auto mb-6"
          />
          <h3 className="text-lg font-semibold mb-2 text-white">Skills That Get You Hired</h3>
          <p className="text-gray-400 text-sm">
            Our programmes are designed to match industry needs — helping you build job-ready skills that stand out in any market.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[300px] bg-[#10172C] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-200 border border-[#1E293B]">
          <img
            src="/icons/hugeicons.png"
            alt="Flexible. Practical. Powerful."
            className="w-[60px] h-[60px] mx-auto mb-6"
          />
          <h3 className="text-lg font-semibold mb-2 text-white">Flexible. Practical. Powerful.</h3>
          <p className="text-gray-400 text-sm">
            Study at your own pace, wherever you are. Get full access to resources, support, and projects that fit into your life — not the other way around.
          </p>
        </div>
      </div>
    </div>
  );
}
