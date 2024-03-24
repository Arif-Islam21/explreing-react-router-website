import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>this page is about job details</h1>
    </div>
  );
};

export default JobDetails;
