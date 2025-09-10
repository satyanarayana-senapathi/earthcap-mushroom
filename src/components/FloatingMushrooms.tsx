import React from 'react';

const FloatingMushrooms = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Button Mushroom 1 */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-[float_6s_ease-in-out_infinite]">
        <img
          src="/lovable-uploads/b7bc371a-d21e-40ff-9775-454fc954a8cf.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Milky Mushrooms 1 */}
      <div className="absolute top-40 right-20 w-20 h-20 opacity-15 animate-[float_8s_ease-in-out_infinite_2s]">
        <img
          src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Button Mushroom 2 */}
      <div className="absolute bottom-32 left-1/4 w-12 h-12 opacity-25 animate-[float_7s_ease-in-out_infinite_1s]">
        <img
          src="/lovable-uploads/b7bc371a-d21e-40ff-9775-454fc954a8cf.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Milky Mushrooms 2 */}
      <div className="absolute top-60 left-1/2 w-14 h-14 opacity-20 animate-[float_9s_ease-in-out_infinite_3s]">
        <img
          src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Button Mushroom 3 */}
      <div className="absolute bottom-20 right-1/3 w-18 h-18 opacity-15 animate-[float_5s_ease-in-out_infinite_4s]">
        <img
          src="/lovable-uploads/b7bc371a-d21e-40ff-9775-454fc954a8cf.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Milky Mushrooms 3 */}
      <div className="absolute top-96 right-10 w-16 h-16 opacity-25 animate-[float_6.5s_ease-in-out_infinite_1.5s]">
        <img
          src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png"
          alt=""
          className="w-full h-full object-contain filter brightness-200"
        />
      </div>

      {/* Mobile-friendly smaller mushrooms */}
      <div className="md:hidden">
        <div className="absolute top-32 right-5 w-8 h-8 opacity-20 animate-[float_7s_ease-in-out_infinite]">
          <img
            src="/lovable-uploads/b7bc371a-d21e-40ff-9775-454fc954a8cf.png"
            alt=""
            className="w-full h-full object-contain filter brightness-200"
          />
        </div>
        <div className="absolute bottom-40 left-5 w-10 h-10 opacity-15 animate-[float_8s_ease-in-out_infinite_2s]">
          <img
            src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png"
            alt=""
            className="w-full h-full object-contain filter brightness-200"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMushrooms;