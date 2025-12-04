import React from "react";
import { TestimonialsLinks } from "../../constant/TestimonialsLinks";
const Testimonials = () => {
  return (
    <div>
      <div className="bg-[url('../../src/assets/section_bg3.png')]">
        <div className="container py-40">
          <div>
            <ul className="flex items-center justify-center">
              {TestimonialsLinks.map((data, index) => (
                <li key={index} className="flex flex-col items-center gap-15">
                  <div className="flex flex-col items-center gap-15">
                    <div className="flex  justify-center">
                      <img src={data.icon} alt="Icons" />
                    </div>
                    <p className="text-center text-2xl w-[60%] text-secondary-blue/80">
                      "{data.description}"
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <div>
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-20 h-20 bg-cover rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <div>{data.name}</div>
                      <div>{data.position}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
