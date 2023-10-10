import React from "react";
 
interface JoinJourney {
    link: { text: string; url: string }[];
}
const JoinJourney: React.FC = () => {
    return (
        <>
        <div
      id="JOIN"
      className="overflow-hidden bg-[#e3b522] flex flex-row justify-between pl-24 items-end"
    >
      <div className="flex flex-col mb-10 gap-8 w-[970px] h-64 items-start">
        <div className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1d1d1d] ml-1">
          THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU
        </div>
        <div className="text-xl font-['Calibri'] leading-[22.5px] mb-6 w-full">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est.
        </div>
        <button
          id="Buttons3"
          className="bg-[#14bde3] flex flex-col justify-center h-16 shrink-0 items-center rounded-[56px]"
        >
          <div
            id="StartNow3"
            className="text-2xl font-['Calibri'] font-bold leading-[28px] text-[#1d1d1d] mx-12"
          >
            GET INVOLVED
          </div>
        </button>
      </div>
      <img
        src="https://file.rendit.io/n/SQktuNMJQGL2RIZQNSum.png"
        id="Asset2"
        className="mt-8"
      />
    </div>
        </>
    );
};

export default JoinJourney;