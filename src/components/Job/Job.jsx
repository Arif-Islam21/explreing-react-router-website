const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite } = job;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt={job_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{company_name}</h2>
          <p>{job_title}</p>
          <p>{remote_or_onsite}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
