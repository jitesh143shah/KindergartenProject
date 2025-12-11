import { Link } from "react-router-dom";
// 1 month = 30 days (you can change this)
import { useEffect, useState } from "react";
const EventsSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-[url('../../src/assets/section_bg2.png')]  bg-cover bg-center">
        <div className="container">
          <div className="flex items-center justify-center py-10 lg:p-40 ">
            <div className="w-full lg:w-[60%]">
              <div className="flex gap-6 justify-center items-center flex-col px-15 py-15 bg-white rounded-4xl">
                <div>
                  <div className="text-primary font-bold text-xl md:text-2xl">
                    {`${new Date().getDate()} ${new Date().toLocaleString(
                      "en-US",
                      { month: "short" }
                    )} ${new Date().getFullYear()}`}
                  </div>
                </div>
                <div className="text-2xl md:text-4xl font-bold text-primary-blue text-center">
                  Drawing Event
                </div>
                <div>
                  <p className="text-justify text-secondary-blue/90 text-[14px] lg:text-xl">
                    Our set he for firmament morning sixth subdue today the
                    darkness creeping gathered divide our let god moving today
                    moving in fourth.
                  </p>
                </div>
                <div className="flex justify-center ">
                  <Link to="#">
                    <button
                      className="
                      relative overflow-hidden bg-primary text-white font-bold capitalize
                      px-8 lg:px-13   py-4 rounded-full before:z-[-10] text-[14px] lg:text-xl
                      before:content-[''] before:absolute before:left-[-100%] before:top-0
                      before:w-full before:h-full before:bg-black/10 before:transition-all before:duration-500
                      hover:before:left-0
                      z-10
                      hover:text-white
                    "
                    >
                      More classes
                    </button>
                  </Link>
                </div>
                <div className="counter">
                  <div className="flex md:gap-4 gap-1  text-xl lg:text-3xl ">
                    {/* Days */}
                    <div className="bg-[#FFF8E6] p-1 lg:p-4 rounded-lg text-center w-10 md:w-20">
                      <div className=" font-bold text-[#2B2E9F]">
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-gray-600">Days</p>
                    </div>

                    {/* Hours */}
                    <div className="bg-[#FFF8E6] p-1 lg:p-4 rounded-lg text-center w-10 md:w-20">
                      <div className=" font-bold text-[#2B2E9F]">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-gray-600">Hrs</p>
                    </div>

                    {/* Minutes */}
                    <div className="bg-[#FFF8E6] p-1 lg:p-4 rounded-lg text-center w-10 md:w-20">
                      <div className=" font-bold text-[#2B2E9F]">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-gray-600">Mins</p>
                    </div>

                    {/* Seconds */}
                    <div className="bg-[#FFF8E6] p-1 lg:p-4 rounded-lg text-center w-10 md:w-20">
                      <div className=" font-bold text-[#2B2E9F]">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-gray-600">Secs</p>
                    </div>
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

export default EventsSection;
