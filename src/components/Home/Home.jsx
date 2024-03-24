import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Home = () => {
  const [jobData, setJobData] = useState([]);

  const [cartLength, setCartLength] = useState(4);

  const handleShowAll = () => {
    setCartLength(jobData.length);
  };

  useEffect(() => {
    fetch("../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobData(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-[70vh] container mx-auto"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* FEATURED JOB SECTION */}
      <div className="grid grid-cols-2 my-12 gap-12 container mx-auto">
        {jobData.slice(0, cartLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <div className={cartLength === jobData.length ? "hidden" : "flex"}>
          <button onClick={handleShowAll} className="btn btn-primary">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
