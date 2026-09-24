import BannarSection from "./components/HomeComponents/BannarSection";
import WorkOutCard from "./components/HomeComponents/WorkOutCard";
import { IWorkOutType } from "./types/DataType";

const WorkDataFetch=async()=>{
  const res=await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
}

export default async function Home() {

  const WorkOutData=await WorkDataFetch();
  return (
    <div>
      <BannarSection />
      <div className="px-4 pb-10 lg:px-20 mt-8 lg:mt-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left ">THE LIBRARY</h1>
          <p className="text-center lg:text-left text-sm text-gray-400">Twelve lifts covering every major muscle group.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10">
          {WorkOutData.map((workout: IWorkOutType) => (
            <WorkOutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
}
