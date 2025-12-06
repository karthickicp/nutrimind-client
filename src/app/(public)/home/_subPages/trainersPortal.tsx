import { Button } from "@/components/ui/button";

export const TrainersPortal = () => {
  return (
    <section className="container trainer-portal">
      <div className="grid my-20 md:grid-cols-2 gap-10 lg:gap-18 xl:gap-25 items-center">
        <div className="space-y-4 md:space-y-8">
          <h4 className="sub-title">Trainers</h4>
          <p className="trainer-portal-desc">
            Assign meal + workout plans Track client progress in real-time Get
            AI recommendations for each trainee
          </p>
          <Button className="btn-primary btn-lg">Open Trainer Portal</Button>
        </div>
        <div className="max-h-130 rounded-2xl overflow-hidden">
          <img
            src="/images/home/trainer.png"
            alt=""
            className="img-full img-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="grid my-20 md:grid-cols-2 gap-10 lg:gap-18 xl:gap-25 items-center">
        <div className="max-h-130 rounded-2xl overflow-hidden order-2 md:order-1">
          <img
            src="/images/home/fitness_lover.png"
            alt=""
            className="img-full img-cover"
          />
        </div>
        <div className="space-y-4 md:space-y-8 order-1 md:order-2">
          <h4 className="sub-title">Fitness Lovers</h4>
          <p className="trainer-portal-desc">
            See what your trainer sees Understand your food impact Stay
            consistent with AI motivation
          </p>
          <Button className="h-auto border-4 border-[#4F4B4B] text-white hover:bg-white/10 cursor-pointer py-5 px-8 font-semibold text-lg rounded-lg tracking-wide bg-transparent">
            Start as Fitness Lover
          </Button>
        </div>
      </div>
    </section>
  );
};
