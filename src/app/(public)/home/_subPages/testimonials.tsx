import React from "react";

export const Testimonials = () => {
  return (
    <section className="container ">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="text-[#4F4B4B] text-xl tracking-wider mb-6">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-3xl font-semibold">
            What fintness lover say about NutriMind
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-[#4F4B4B] backdrop-blur-sm rounded-3xl py-6 lg:py-8 px-4"
            >
              {/* Testimonial Text */}
              <p className="text-white/50 leading-relaxed mb-2">
                I love NutriMind. It has a very personalized meal, and many more
                things. I really recommend it
              </p>

              {/* Author Info */}
              <div className="space-y-2">
                <h3 className="text-white mb-1 text-xl font-semibold">
                  Raj Yadav
                </h3>
                <p className="text-white/50 text-sm">Fitness Trainer</p>

                {/* Star Rating */}
                {/* <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-gray-600 text-gray-600"
                    />
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
