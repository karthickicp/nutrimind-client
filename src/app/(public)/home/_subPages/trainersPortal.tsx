import { Button } from "@/components/ui/button";

export const TrainersPortal = () => {
  return (
    <section className="container">
      <div className="grid my-20 md:grid-cols-2 gap-25 items-center">
        <div className="space-y-8">
          <h4 className="text-5xl font-semibold">Trainers</h4>
          <p className="text-white/50 leading-14 text-3xl xl:max-w-130">
            Assign meal + workout plans Track client progress in real-time Get
            AI recommendations for each trainee
          </p>
          <Button className="h-auto bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer py-5 px-8 font-semibold text-lg rounded-lg tracking-wide">
            Open Trainer Portal
          </Button>
        </div>
        <div className="max-h-130 rounded-2xl overflow-hidden">
          <img
            src="/images/home/trainer.png"
            alt=""
            className="img-full img-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="grid my-20 md:grid-cols-2 gap-25 items-center">
        <div className="max-h-130 rounded-2xl overflow-hidden">
          <img
            src="/images/home/fitness_lover.png"
            alt=""
            className="img-full img-cover"
          />
        </div>
        <div className="space-y-8">
          <h4 className="text-5xl font-semibold">Fitness Lovers</h4>
          <p className="text-white/50 leading-14 text-3xl xl:max-w-130">
            See what your trainer sees Understand your food impact Stay
            consistent with AI motivation
          </p>
          <Button className="h-auto border-4 border-white/20  text-white hover:bg-white/10 cursor-pointer py-5 px-8 font-semibold text-lg rounded-lg tracking-wide bg-transparent">
            Start as Fitness Lover
          </Button>
        </div>
      </div>
    </section>
  );
};
