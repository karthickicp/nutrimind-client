export const HowItWorks = () => {
  const options: { title: string; description: string; img: string }[] = [
    {
      title: "Scan your meal",
      description: "AI detects calories & nutrients.",
      img: "/images/home/how_it_works_img_1.png",
    },
    {
      title: "Track your body & mood",
      description: "AI maps nutrition + training.",
      img: "/images/home/how_it_works_img_2.png",
    },
    {
      title: "Grow smarter with insights",
      description: "See progress in one dashboard.",
      img: "/images/home/how_it_works_img_3.png",
    },
  ];

  return (
    <section className=" container mx-auto py-16 lg:py-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 font-semibold">
        How is it work?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
        {options.map((option) => (
          <div key={option.title}>
            <div className="rounded-2xl overflow-hidden bg-gray-800/50 mb-5">
              <img
                src={option.img}
                alt={option.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-[#D1D1D6] mb-2">
              {option.title}
            </h3>
            <p className="text-white opacity-50 text-xl">
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
