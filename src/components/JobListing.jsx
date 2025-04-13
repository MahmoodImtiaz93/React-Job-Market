import jobs from "../job.json"; // Assuming you have a jobs.json file in the data folder
import JobListingCardItems from "./JobListingCardItems"; // Import the JobListingCardItems component
const JobListing = (job) => {
  const recentJobs = jobs.slice(0, 3); // Get the first 3 jobs from the jobs array

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing 1 --> */}
            {recentJobs.map((job) => (
              <JobListingCardItems key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListing;
