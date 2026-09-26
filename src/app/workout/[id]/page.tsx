import DetailsPage from "@/app/components/HomeComponents/DetailsPage";
import { IWorkOutType } from "@/app/types/DataType";

interface WorkOutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: WorkOutDetailsPageProps) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL}/api/fitlog/${id}`);
  const data: IWorkOutType = await res.json();

  return (
    <DetailsPage data={data}/>
  );
};

export default WorkoutDetails;
