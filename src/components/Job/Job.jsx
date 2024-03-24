import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-2xl p-8">
        <figure>
          <img src={logo} alt={job_title} />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title text-2xl">{company_name}</h2>
          <p>{job_title}</p>
          <p>{remote_or_onsite}</p>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
